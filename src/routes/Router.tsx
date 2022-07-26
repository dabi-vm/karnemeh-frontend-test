import { QADetails } from "../components/QADetails/QADetails";
import { QAList } from "../components/QAList/QAList";

const Routes = [
  { path: "/", component: QAList },
  { path: "/:id", component: QADetails },
];

export default Routes;
