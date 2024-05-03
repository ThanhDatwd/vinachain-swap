import { ConsensusInfo } from "./block/ConsensusInfo";
import { MevInfo } from "./block/MevInfo";
import { OverviewTab } from "./block/OverviewTab";
import { Tabs } from "./Tabs";

export const TabView = () => {
  const datatabs = [
    { label: "Overview Tab", content: <OverviewTab /> },
    { label: "Mev Info", content: <MevInfo /> },
    { label: "Consensus Info", content: <ConsensusInfo /> },
  ];
  return <Tabs tabs={datatabs} />;
};
