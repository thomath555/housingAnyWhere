// Core
import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

// Components
import Label from '../Label';
import AppLoader from '../Loader';

// Type
import { dataSetType, Props } from './types';

// Styles
import { ItemWrapper, LoaderWrapper } from './styles';
import colors from '../../assets/styles/colors';

// Others
import { getLocationAndOrigin, getEpisodeDetails } from './helper'
import { FontSizes, FontWeights } from '../../utils/types/enums';


const DetailsModal: React.FC<Props> = (props: Props) => {
  const { showModal, location, name, episode, origin, toggleModalHandler } = props;
  const [loading, updateLoading] = useState<boolean>(true);
  const [dataSet, setDataSet] = useState<dataSetType>({
    locationDetails: {},
    originDetails: {},
    episodeList: []
  })
  const toggleModal = () => toggleModalHandler();

  useEffect(() => {
    const fetchInitialData = async () => {
      updateLoading(true);
      const [locationDetails, originDetails, episodeList] = await Promise.all([
        getLocationAndOrigin(location?.url),
        getLocationAndOrigin(origin?.url),
        getEpisodeDetails(episode),
      ])
      updateLoading(false);
      setDataSet({
        locationDetails,
        originDetails,
        episodeList
      })
    }
    fetchInitialData();
  }, [episode, location, origin])

  const { locationDetails, originDetails, episodeList } = dataSet;
  const renderDataRow = (label: string, data: string) => {
    return (
      <ItemWrapper>
        <Label
          label={label}
          fontSize={FontSizes.subText}
          fontWeight={FontWeights.bold}
          color={colors.lightGrey}
        />
        <Label
          label={data}
          fontSize={FontSizes.subText}
          fontWeight={FontWeights.bold}
          color={colors.white}
        />
      </ItemWrapper>
    )
  }
  return (
    <Modal
      visible={showModal}
      title={name}
      onOk={toggleModal}
      onCancel={toggleModal}
      closeIcon={<CloseOutlined style={{ color: colors.white }} />}
      footer={[
        <Button key="submit" type="primary" onClick={toggleModal}>
          Close
        </Button>,
      ]}
    >
      {loading ?
        <LoaderWrapper>
          <AppLoader />
        </LoaderWrapper>
        :
        <>
          {locationDetails &&
            renderDataRow('Location Details',
              `Dimension : ${locationDetails.dimension} - 
              Name : ${locationDetails.name} - 
              Residents : ${locationDetails?.residents?.length} - 
              Type : ${locationDetails.type}`
            )
          }
          {originDetails &&
            renderDataRow('Origin Details',
              `Dimension : ${originDetails.dimension} - 
              Name : ${originDetails.name} - 
              Residents : ${originDetails?.residents?.length} - 
              Type : ${originDetails.type}`
            )
          }
          {episodeList &&
            renderDataRow('Name of the chapters',
              `${episodeList.join(', ')}`
            )
          }
        </>}
    </Modal>
  )
}

export default DetailsModal;