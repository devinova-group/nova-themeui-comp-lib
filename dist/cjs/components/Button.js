"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Buttons = void 0;
const react_1 = __importDefault(require("react"));
const theme_ui_1 = require("theme-ui");
const Buttons = (props) => {
    const { children, style } = props;
    let _style = style || {};
    return (react_1.default.createElement(theme_ui_1.Button, { sx: _style }, children));
};
exports.Buttons = Buttons;
//# sourceMappingURL=Button.js.map