import styled, { css } from 'styled-components';
import colors from '../../assets/styles/colors';
import Label from '../Label';

export const Wrapper = styled.div`
    width: 600px;
    height: 220px;
    display: flex;
    overflow: hidden;
    background: ${colors.mediumGrey};
    border-radius: 0.5rem;
    margin: 0.75rem;
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px;

    @media screen and (max-width: 550px) {
        flex-direction: column;
        height: initial;
        width: 100%;
      }
`

export const ViewMore = styled.button`
    color: ${colors.themeColor};
    width: 70px;
    margin-top: 10px;
    background: none;
    border: none;
    text-align: left;
    font-weight: 600;
    cursor: pointer;
    padding: 0;
`
export const ImgWrapper = styled.div`
    flex: 2 1 0%;
    width: 100%;

    img {
        width: 100%;
        height: 100%;
        margin: 0px;
        opacity: 1;
        transition: opacity 0.5s ease 0s;
        object-position: center center;
        object-fit: cover;
    }
`
export const ContentWrapper = styled.div`
    flex: 3 1 0%;
    position: relative;
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
`

export const StatusLabel = styled(Label) <{ isAlive?: boolean }>`
    position: relative;
    padding-left: 12px;
    margin-top: -1px;
    margin-bottom: 10px;
    &:before {
        content: '';
        position: absolute;
        ${({ isAlive }) =>
        css`
            background: ${isAlive ? colors.green : colors.lightGrey};
        `}
        width: 8px;
        height: 8px;
        left: 0;
        top: 6px;
        border-radius: 50%;
    }
`