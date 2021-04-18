import { useControls } from './useControls'

export const usePagination = ({ data, dataOffset, controlsOffset }) => {
  const totalOfPages = Math.ceil(data.length / dataOffset);

  const { currentPage, renderControls } = useControls({
    totalOfPages,
    controlsOffset,
  });

  const getPaginatedData = () => {
    const start = currentPage * dataOffset - dataOffset;
    const end = start + dataOffset;
    const paginatedItems = data.slice(start, end);

    return paginatedItems;
  }

  return {
    renderControls,
    getPaginatedData,
  }
}