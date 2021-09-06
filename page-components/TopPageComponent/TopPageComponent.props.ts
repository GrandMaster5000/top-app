import { TopLevelCategory, TopPageModel } from '../../interfeces/page.interface';
import { ProductModel } from '../../interfeces/product.interface';

export interface TopPageComponentProps {
    firstCategory: TopLevelCategory,
    page: TopPageModel;
    products: ProductModel[];
}
