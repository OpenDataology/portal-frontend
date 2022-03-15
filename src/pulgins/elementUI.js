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
    Autocomplete
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
      
  }
};
