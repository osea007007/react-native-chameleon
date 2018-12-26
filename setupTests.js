import * as enzyme from 'enzyme';
import 'jsdom-global/register';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });