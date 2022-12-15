export interface MenuItem {
  routes: string[];
  name: string;
  disable: boolean;
  children: MenuItem[];
}
