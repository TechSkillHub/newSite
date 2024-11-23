import { queryContent } from "#imports"

export const useContent = async () => {
  // Query para buscar o conteúdo do arquivo texts.yml
  const data = await queryContent('main').findOne()
  return data
}
