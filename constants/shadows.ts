/**
 * Este arquivo não é mais usado para injeção inline de estilos.
 * Use Platform.select() diretamente dentro de StyleSheet.create().
 *
 * Exemplo correto:
 *
 * import { Platform, StyleSheet } from 'react-native';
 *
 * const styles = StyleSheet.create({
 *   card: {
 *     ...Platform.select({
 *       web: { boxShadow: '4px 4px 0px #000' },
 *       default: {
 *         shadowColor: '#000',
 *         shadowOffset: { width: 4, height: 4 },
 *         shadowOpacity: 0.2,
 *         shadowRadius: 0,
 *         elevation: 5,
 *       },
 *     }),
 *   },
 * });
 */
