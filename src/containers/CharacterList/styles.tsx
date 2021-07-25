import styled from 'styled-components';
import colors from '../../assets/styles/colors';

export const LabelWrapper = styled.div`
    display: flex;
    align-items: center;
    height: calc(40vh);
    text-align: center;
    position: relative;
    justify-content: center;
`

export const ListWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1920px;
    justify-content: center;
`

export const InfiniteScrollWrapper = styled.div`
    overflow: auto;
    height: 100vh;
`

export const ListContainer = styled.div`
    background: ${colors.black};
    display: flex;
    align-items: center;
    padding: 4.5rem 0px;
    min-height: calc(60vh);
    flex-direction: column;
    justify-content: center;

     
    ul {
        margin-top: 30px;
    }

    @media screen and (max-width: 550px) {
        padding: 1.5rem;
      }
`