// Punto de entrada del emblema 3D de Benny’s (se publica como dist/assets/logo3d/logo3d.js).
import wordmarkSvg from '../source/wordmark.svg';
import monogramSvg from '../source/monogram.svg';
import {mountLogo as mount,renderStill,buildLogoModel} from './stage.js';
import {LOGO_CONFIG} from './config.js';

export const SOURCES=Object.freeze({wordmark:wordmarkSvg,monogram:monogramSvg});
/** variant: 'wordmark' (emblema completo) o 'monogram' (la B). */
export function mountLogo(container,options={}){return mount(container,{...options,svg:SOURCES[options.variant||'wordmark']});}
export {renderStill,buildLogoModel,LOGO_CONFIG};
