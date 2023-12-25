import React from "react";

export interface TimeLineItemProps {
    title?: string;
    description?: React.ReactNode;
    fromTime?: string;
    toTime?: string;
    sourceLink?: string;
    sourceText?: string;
    icon?: React.ReactNode;
    sourceLinkIcon?: React.ReactNode;
    isLatest?: boolean;
};