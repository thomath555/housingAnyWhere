// Core
import React from 'react';
import Loader from "react-loader-spinner";
import colors from '../../assets/styles/colors';

// Styles
import { LoaderWrapper } from './styles'

const AppLoader: React.FC = () => {
    return (
        <LoaderWrapper>
            <Loader
                type="Puff"
                color={colors.themeColor}
                height={40}
                width={40}
            />
        </LoaderWrapper>
    )
}

export default AppLoader;