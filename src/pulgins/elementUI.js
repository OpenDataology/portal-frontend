import Vue from 'vue'
import {
  Pagination,
  Row,
  Col,
  Select,
  Option,
  Descriptions,
  DescriptionsItem,
  Tabs,
  TabPane,
  Collapse,
  CollapseItem,
  Table,
  TableColumn,
  Autocomplete,
  Tree,
  Input,
  Tooltip,
  Form,
  FormItem,
  Button,
  Drawer,
  Transfer,
  Empty,
  Card,
  Checkbox,
  CheckboxGroup,
  RadioGroup,
  Radio,
  DatePicker,
  MessageBox,
  Notification,
  Dropdown,
  DropdownMenu,
  DropdownItem
} from "element-ui";
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

// 设置语言
locale.use(lang)
export default {
  install(app) {
    app
      .use(Pagination)
      .use(Row)
      .use(Col)
      .use(Select)
      .use(Option)
      .use(Descriptions)
      .use(DescriptionsItem)
      .use(Tabs)
      .use(TabPane)
      .use(Collapse)
      .use(CollapseItem)
      .use(Table)
      .use(TableColumn)
      .use(Autocomplete)
      .use(Tree)
      .use(Input)
      .use(Tooltip)
      .use(Form)
      .use(FormItem)
      .use(Button)
      .use(Drawer)
      .use(Transfer)
      .use(Empty)
      .use(Card)
      .use(Checkbox)
      .use(CheckboxGroup)
      .use(RadioGroup)
      .use(Radio)
      .use(DatePicker)
      .use(Dropdown)
      .use(DropdownMenu)
      .use(DropdownItem)

  }
};
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$notify = Notification;
// Vue.prototype.$message = Message;