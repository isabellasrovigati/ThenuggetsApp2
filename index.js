/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import telainformativa from './telainformativa';
import telasustentabilidade from './telasustentabilidade';
import telacadastro from './telacadastro';
import telacalendario from './telacalendario';
import funcionarios from './funcionarios';
import funcionarios2 from './funcionarios2';
import notifications from './notifications';
import stacknavigator from './stacknavigator';
AppRegistry.registerComponent(appName, () => funcionarios);
