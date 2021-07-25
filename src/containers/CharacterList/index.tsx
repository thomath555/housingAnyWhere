// Core
import React, { useEffect, useState } from 'react';
import { dataSetType, Props } from './types'
import InfiniteScroll from 'react-infinite-scroller';


// Components
import Label from '../../components/Label';
import SingleCard from '../../components/CharacterCard';
import AppLoader from '../../components/Loader';
// Styles
import 'antd/dist/antd.css';
import { LabelWrapper, ListWrapper, ListContainer, InfiniteScrollWrapper } from './styles';

// Types
import { singleCharacterType } from '../../utils/types/globalTypes';
import { FontSizes, FontWeights } from '../../utils/types/enums';

// Others
import { fetchData } from '../../utils/fetch'
import { restAPIs } from '../../utils/restAPIs'

const CharacterList: React.FC<Props> = (props: Props) => {
  const [currentPage, updateCurrentPage] = useState<number>(1);
  const [loading, updateLoading] = useState<boolean>(true);
  const [dataSet, setDataSet] = useState<dataSetType>({
    info: {},
    results: []
  })


  useEffect(() => {
    const fetchCharacters = async () => {
      updateLoading(true)
      const res: any = await fetchData(restAPIs.getAllCharacters(currentPage))
      updateLoading(false)
      setDataSet(prev => ({
        ...prev,
        info: res.info,
        results: [...prev.results, ...res.results]
      }))
    }
    fetchCharacters();
  }, [currentPage])

  const handleInfiniteOnLoad = () => {
    if (loading) return;
    updateCurrentPage(prev => prev + 1)
  }
  const { results, info } = dataSet;
  return (
    <InfiniteScrollWrapper>
      <InfiniteScroll
        initialLoad={false}
        pageStart={1}
        loadMore={handleInfiniteOnLoad}
        hasMore={info.pages > currentPage}
        useWindow={false}
      >
        <LabelWrapper>
          <Label
            label="The Rick and Morty API"
            fontSize={FontSizes.largeText}
            fontWeight={FontWeights.bold}
          />
        </LabelWrapper>
        <ListContainer>
          <ListWrapper>
            {
              results.map((item: singleCharacterType) => (
                <SingleCard key={item.id} dataSet={item} />
              ))
            }
          </ListWrapper>
          {loading && <AppLoader />}
        </ListContainer>
      </InfiniteScroll>
    </InfiniteScrollWrapper>
  );
}

export default CharacterList;