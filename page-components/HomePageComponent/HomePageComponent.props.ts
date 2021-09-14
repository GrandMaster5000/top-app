import { MenuItem } from '../../interfeces/menu.interface';
import { TopLevelCategory } from '../../interfeces/page.interface';

export interface HomePageComponentProps {
    firstCategory: TopLevelCategory,
    menu: MenuItem[];
}
