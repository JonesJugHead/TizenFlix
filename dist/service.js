'use strict';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var service = {exports: {}};

/**
 * service.js - Service TizenBrew pour l'enregistrement des touches TV
 *
 * Ce fichier est execute dans le contexte du service TizenBrew.
 * Il enregistre les touches de telecommande Samsung via l'API Tizen.
 */

(function (module) {
	const MEDIA_KEYS = [
	  'MediaPlayPause',
	  'MediaPlay',
	  'MediaPause',
	  'MediaStop',
	  'MediaFastForward',
	  'MediaRewind',
	  'MediaTrackNext',
	  'MediaTrackPrevious',
	];

	/**
	 * Enregistre les touches media via l'API Tizen.
	 * Tizen necessite un enregistrement explicite pour les touches media.
	 */
	function registerMediaKeys() {
	  if (typeof tizen === 'undefined' || !tizen.tvinputdevice) {
	    console.warn('[FlemmixTV] Tizen API non disponible');
	    return;
	  }

	  MEDIA_KEYS.forEach(key => {
	    try {
	      tizen.tvinputdevice.registerKey(key);
	    } catch (e) {
	      console.warn(`[FlemmixTV] Impossible d'enregistrer la touche: ${key}`, e);
	    }
	  });

	  console.log('[FlemmixTV] Touches media enregistrees:', MEDIA_KEYS);
	}

	/**
	 * Enregistre les touches de navigation (Back).
	 * Tizen peut necessiter l'enregistrement explicite de XF86Back.
	 */
	function registerNavigationKeys() {
	  if (typeof tizen === 'undefined' || !tizen.tvinputdevice) return;

	  try {
	    tizen.tvinputdevice.registerKey('XF86Back');
	  } catch (e) {
	    // XF86Back est souvent disponible par defaut
	  }
	}

	// Initialisation
	registerMediaKeys();
	registerNavigationKeys();

	// Export pour le systeme TizenBrew
	{
	  module.exports = { registerMediaKeys, registerNavigationKeys };
	} 
} (service));

var serviceExports = service.exports;
var service_default = /*@__PURE__*/getDefaultExportFromCjs(serviceExports);

module.exports = service_default;
