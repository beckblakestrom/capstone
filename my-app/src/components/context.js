import React from "react";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import { createContext } from "react";
import { HashLink } from "react-router-hash-link";

export const UserContext = createContext(null);

export { Route, Routes, Link, HashRouter, HashLink };
