import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'

import { Tree, Table, TableColumn } from 'element-ui'

import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'

Vue.component(Tree.name, Tree)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)