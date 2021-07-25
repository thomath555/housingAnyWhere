// Core
import React, { useContext } from 'react';
import colors from '../../assets/styles/colors';
import { FontSizes, FontWeights } from '../../utils/types/enums';

// Components
import Label from '../Label';

// Styles
import { Wrapper, ImgWrapper, ContentWrapper, StatusLabel, ViewMore } from './styles'

// Others
import { store } from '../../store/index';
import { TOGGLE_MODAL } from '../../config/action';

// Types
import { Props } from './types'

const CharacterCard: React.FC<Props> = (props: Props) => {
    const ALIVE = 'Alive';
    const { dataSet } = props;
    const {
        location,
        name,
        origin,
        episode,
        image,
        status,
        species,
        type,
        gender
    } = dataSet;

    // get global store using context hook
    const globalState = useContext(store);
    const { dispatch } = globalState;
    const onClickHandle = () => {
        dispatch({
            type: TOGGLE_MODAL,
            data: {
                showModal: true,
                location,
                name,
                origin,
                episode
            },
        });
    }

    const isAlive = status === ALIVE;

    return (
        <Wrapper>
            <ImgWrapper>
                <img src={image} alt={`${name}`} />
            </ImgWrapper>
            <ContentWrapper>
                <Label
                    label={name}
                    fontSize={FontSizes.medText}
                    fontWeight={FontWeights.bold}
                    color={colors.white}
                />
                <StatusLabel
                    label={`${status} - ${species}`}
                    isAlive={isAlive}
                    fontSize={FontSizes.subText}
                    fontWeight={FontWeights.medium}
                    color={colors.white}
                />
                <Label
                    label='Character Type Details'
                    fontSize={FontSizes.subText}
                    fontWeight={FontWeights.bold}
                    color={colors.lightGrey}
                />
                <Label
                    label={`${type || 'unknown '} - ${gender}`}
                    fontSize={FontSizes.subText}
                    fontWeight={FontWeights.bold}
                    color={colors.white}
                />
                <ViewMore onClick={onClickHandle}>More Info</ViewMore>
            </ContentWrapper>
        </Wrapper>
    )
}

export default CharacterCard;