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
} from "element-ui";

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

  }
};
