param(
    [string]$ProjectRoot = (Get-Location).Path,
    [string]$OutputFolderName = "Github"
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Normalize-RelativePath {
    param([string]$RelativePath)

    if ([string]::IsNullOrWhiteSpace($RelativePath)) {
        return $null
    }

    $normalized = $RelativePath.Trim()
    $normalized = $normalized -replace '^[.][\\/]', ''
    $normalized = $normalized -replace '/', [System.IO.Path]::DirectorySeparatorChar

    return $normalized
}

function Ensure-Directory {
    param([string]$DirectoryPath)

    if (-not (Test-Path -LiteralPath $DirectoryPath)) {
        New-Item -ItemType Directory -Path $DirectoryPath -Force | Out-Null
    }
}

function Copy-RelativeFile {
    param(
        [string]$Root,
        [string]$DestinationRoot,
        [string]$RelativePath
    )

    $normalized = Normalize-RelativePath $RelativePath
    if ([string]::IsNullOrWhiteSpace($normalized)) {
        return
    }

    $sourcePath = Join-Path $Root $normalized
    if (-not (Test-Path -LiteralPath $sourcePath -PathType Leaf)) {
        Write-Warning "Fichier introuvable, ignoré : $RelativePath"
        return
    }

    $destinationPath = Join-Path $DestinationRoot $normalized
    $destinationDirectory = Split-Path -Parent $destinationPath
    Ensure-Directory $destinationDirectory

    Copy-Item -LiteralPath $sourcePath -Destination $destinationPath -Force

    $sourceMapPath = "$sourcePath.map"
    if (Test-Path -LiteralPath $sourceMapPath -PathType Leaf) {
        Copy-Item -LiteralPath $sourceMapPath -Destination "$destinationPath.map" -Force
    }
}

function Copy-RelativeDirectory {
    param(
        [string]$Root,
        [string]$DestinationRoot,
        [string]$RelativePath
    )

    $normalized = Normalize-RelativePath $RelativePath
    if ([string]::IsNullOrWhiteSpace($normalized)) {
        return
    }

    $sourcePath = Join-Path $Root $normalized
    if (-not (Test-Path -LiteralPath $sourcePath -PathType Container)) {
        Write-Warning "Dossier introuvable, ignoré : $RelativePath"
        return
    }

    $destinationPath = Join-Path $DestinationRoot $normalized
    Ensure-Directory (Split-Path -Parent $destinationPath)

    Copy-Item -LiteralPath $sourcePath -Destination $destinationPath -Recurse -Force
}

$resolvedProjectRoot = (Resolve-Path -LiteralPath $ProjectRoot).Path
$outputRoot = Join-Path $resolvedProjectRoot $OutputFolderName
$packageJsonPath = Join-Path $resolvedProjectRoot "package.json"

if (-not (Test-Path -LiteralPath $packageJsonPath -PathType Leaf)) {
    throw "package.json introuvable à la racine : $packageJsonPath"
}

$packageJson = Get-Content -LiteralPath $packageJsonPath -Raw | ConvertFrom-Json

if (Test-Path -LiteralPath $outputRoot) {
    Remove-Item -LiteralPath $outputRoot -Recurse -Force
}
Ensure-Directory $outputRoot

Copy-Item -LiteralPath $packageJsonPath -Destination (Join-Path $outputRoot "package.json") -Force

foreach ($optionalFile in @(
    "README.md",
    "README.MD",
    "LICENSE",
    "LICENSE.md",
    "package-lock.json"
)) {
    $optionalPath = Join-Path $resolvedProjectRoot $optionalFile
    if (Test-Path -LiteralPath $optionalPath -PathType Leaf) {
        Copy-Item -LiteralPath $optionalPath -Destination (Join-Path $outputRoot (Split-Path -Leaf $optionalPath)) -Force
    }
}

$copiedEntries = New-Object 'System.Collections.Generic.HashSet[string]'

foreach ($fileField in @("main", "serviceFile")) {
    if ($packageJson.PSObject.Properties.Name -contains $fileField) {
        $relative = Normalize-RelativePath ([string]$packageJson.$fileField)
        if (-not [string]::IsNullOrWhiteSpace($relative) -and $copiedEntries.Add("FILE::$relative")) {
            Copy-RelativeFile -Root $resolvedProjectRoot -DestinationRoot $outputRoot -RelativePath $relative
        }
    }
}

if ($packageJson.PSObject.Properties.Name -contains "appPath") {
    $appPath = Normalize-RelativePath ([string]$packageJson.appPath)
    if (-not [string]::IsNullOrWhiteSpace($appPath)) {
        $appDirectory = Split-Path -Parent $appPath

        if ([string]::IsNullOrWhiteSpace($appDirectory)) {
            if ($copiedEntries.Add("FILE::$appPath")) {
                Copy-RelativeFile -Root $resolvedProjectRoot -DestinationRoot $outputRoot -RelativePath $appPath
            }
        }
        else {
            if ($copiedEntries.Add("DIR::$appDirectory")) {
                Copy-RelativeDirectory -Root $resolvedProjectRoot -DestinationRoot $outputRoot -RelativePath $appDirectory
            }
        }
    }
}

if ($packageJson.PSObject.Properties.Name -contains "files") {
    foreach ($entry in $packageJson.files) {
        $relative = Normalize-RelativePath ([string]$entry)
        if ([string]::IsNullOrWhiteSpace($relative)) {
            continue
        }

        $sourcePath = Join-Path $resolvedProjectRoot $relative
        if (Test-Path -LiteralPath $sourcePath -PathType Container) {
            if ($copiedEntries.Add("DIR::$relative")) {
                Copy-RelativeDirectory -Root $resolvedProjectRoot -DestinationRoot $outputRoot -RelativePath $relative
            }
        }
        elseif ($copiedEntries.Add("FILE::$relative")) {
            Copy-RelativeFile -Root $resolvedProjectRoot -DestinationRoot $outputRoot -RelativePath $relative
        }
    }
}

Write-Host "Dossier prêt : $outputRoot"
Write-Host "Contenu copié :"
Get-ChildItem -LiteralPath $outputRoot -Recurse | ForEach-Object {
    $_.FullName.Replace($outputRoot + [System.IO.Path]::DirectorySeparatorChar, "")
}