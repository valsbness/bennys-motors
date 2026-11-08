// Solo herramientas de desarrollo: render de imágenes estáticas y exportación GLB. No se publica.
import * as THREE from 'three';
import {GLTFExporter} from 'three/addons/exporters/GLTFExporter.js';
import {renderStill,buildLogoModel,SOURCES,LOGO_CONFIG} from '../src/index.js';
window.BennysLogoTools={THREE,GLTFExporter,renderStill,buildLogoModel,SOURCES,LOGO_CONFIG};
