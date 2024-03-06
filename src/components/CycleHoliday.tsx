import React, { useState } from "react";
import { Button } from "react-bootstrap";
export type Holiday =
    | "Dia de los Muertos"
    | "Earth Day"
    | "Groundhog's Day"
    | "Lief Erickson's Day"
    | "Winter Equinox";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Groundhog's Day");

    const swapAlphabet: Record<Holiday, Holiday> = {
        "Dia de los Muertos": "Earth Day",
        "Earth Day": "Groundhog's Day",
        "Groundhog's Day": "Lief Erickson's Day",
        "Lief Erickson's Day": "Winter Equinox",
        "Winter Equinox": "Dia de los Muertos"
    };

    const swapDate: Record<Holiday, Holiday> = {
        "Groundhog's Day": "Earth Day",
        "Earth Day": "Lief Erickson's Day",
        "Lief Erickson's Day": "Dia de los Muertos",
        "Dia de los Muertos": "Winter Equinox",
        "Winter Equinox": "Groundhog's Day"
    };

    const holidayEmoji: Record<Holiday, string> = {
        "Dia de los Muertos": "💀",
        "Earth Day": "🌎",
        "Groundhog's Day": "🐿️",
        "Lief Erickson's Day": "🛶",
        "Winter Equinox": "🌌"
    };

    return (
        <div>
            Cycle Holiday
            <div>Holiday: {holidayEmoji[holiday]}</div>
            <div>
                <Button onClick={() => setHoliday(swapAlphabet[holiday])}>
                    Swap by Alphabet
                </Button>
                <Button onClick={() => setHoliday(swapDate[holiday])}>
                    Swap by Year
                </Button>
            </div>
        </div>
    );
}
