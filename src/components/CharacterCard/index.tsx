// Core
import React, { useState } from 'react';
import colors from '../../assets/styles/colors';
import { FontSizes, FontWeights } from '../../utils/types/enums';

// Components
import DetailsModal from '../DetailsModal'
import Label from '../Label';

// Styles
import { Wrapper, ImgWrapper, ContentWrapper, StatusLabel, ViewMore } from './styles'

// Types
import { Props } from './types'

const CharacterCard: React.FC<Props> = (props: Props) => {
    const ALIVE = 'Alive';
    const { dataSet } = props;
    const [showModal, updateShowModal] = useState<boolean>(false);
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

    const onClickHandle = () => {
        updateShowModal(prev => !prev)
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
                {showModal && <DetailsModal {...{
                    showModal,
                    location,
                    name,
                    origin,
                    episode,
                    toggleModalHandler: onClickHandle
                }}
                />}
            </ContentWrapper>
        </Wrapper>
    )
}

export default CharacterCard;