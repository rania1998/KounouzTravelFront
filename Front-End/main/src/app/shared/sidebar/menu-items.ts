import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {
        path: '', title: 'Personal', icon: '', class: 'nav-small-cap', label: '', labelClass: '', extralink: true, submenu: []
    },
    {
        path: '', title: 'Dashboards', icon: 'mdi mdi-gauge', class: 'has-arrow', label: '4', labelClass: 'label label-rouded label-themecolor pull-right', extralink: false,
        submenu: [
            { path: '/dashboard/dashboard1', title: 'Modern', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/dashboard/dashboard2', title: 'Classic', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/dashboard/dashboard3', title: 'Analytical', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        ]
    },

    {
        path: '', title: 'Charts & Icons', icon: '', class: 'nav-small-cap', label: '', labelClass: '', extralink: true, submenu: []
    },
    {
        path: '', title: 'Charts', icon: 'mdi mdi-chart-arc', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: '/charts/chartjs', title: 'Chart Js', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/charts/chartistjs', title: 'Chartist Js', icon: '', class: '', label: '', labelClass: '', extralink: false, submenu: [] },

        ]
    },

    {
      path: '', title: 'Gestion Category', icon: 'fa fa-newspaper-o', class: 'has-arrow', label: '', labelClass: '', extralink: false,
      submenu: [
          {  path: '/category/list-category', title: 'Liste Category', icon: 'fa fa-list', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
          {  path: '/category/add-category', title: 'Ajouter category', icon: 'fa fa-plus-square', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
          {  path: '', title: 'Validation category', icon: 'fa fa-check-square-o', class: '', label: '', labelClass: '', extralink: false, submenu: [] },

      ]
  },



    {
        path: '', title: 'Group Manager', icon: 'fa fa-group', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            {  path: '/group/list-group', title: 'Group List', icon: 'fa fa-list', class: '', label: '', labelClass: '', extralink: false, submenu: [] },

        ]
    },


    {
        path: '', title: 'Contract Manager', icon: 'fa fa-group', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            {  path: '/contract/list-contract', title: 'Group List', icon: 'fa fa-list', class: '', label: '', labelClass: '', extralink: false, submenu: [] },

        ]
    },


];

