import React, { useContext } from "react";
import { TotalStatisticCard } from "@/App/components/card/TotalStatisticCard";
import { TotalDialog } from "@/App/components/dialog/TotalDialog";

export const CalculatorTotal: React.FC = () => {
	// const { state } = useContext(CalcStoreProvider);

	return (
		<>
			<TotalStatisticCard />
			<TotalDialog />
		</>
	);
};
