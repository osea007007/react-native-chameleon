import { ReactNode } from 'react';

type SwiperType = 'default' | 'offset' | 'none';

interface RenderItemVal<T> {
  item:T, 
  index:number
}

export interface SwiperProps<T> {
  type?: SwiperType;
  data: T[];
  renderItem:(val: RenderItemVal<T>) => React.ReactDOM;
  pagination?:(data: T[], activeIndex:number) => React.ReactNode;
  showPagination?: boolean;
  sliderWidth?: number;
  itemWidth?: number;
  offset?: number;
  [key: string]: any;
}

export declare const Swiper:<T>(props:SwiperProps<T>) => ReactNode;