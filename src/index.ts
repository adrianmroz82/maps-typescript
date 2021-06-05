import { CustomMap } from './CustomMap';
import { Company } from './Company';
import { User } from './User';

new CustomMap('map');

const user = new User();
export const company = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);
