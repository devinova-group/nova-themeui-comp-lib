import React from 'react';

import { Button } from 'theme-ui';

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    backgroundColor?: string;
    color?: string;
}

export const Buttons: React.FunctionComponent<IButtonProps> = (props) => {
    const { children, style } = props;

    let _style: any = style || {};

    return (
        <Button sx={_style}>
            {children}
        </Button>
    );
};
