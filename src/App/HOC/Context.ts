import React from "react";
import { interfaces } from "inversify";

export const Context = React.createContext<interfaces.Container | null>(null);
