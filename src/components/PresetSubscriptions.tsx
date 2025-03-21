import {
  Box,
  Button,
  Text,
  SimpleGrid,
  VStack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading
} from '@chakra-ui/react'
import { Subscription } from '../types/subscription'

interface PresetSubscriptionsProps {
  presets: Subscription[]
  onAddPreset: (preset: Subscription) => void
}

const categoryLabels: Record<string, string> = {
  streaming: '串流影音',
  music: '音樂服務',
  storage: '雲端儲存',
  gaming: '遊戲服務',
  productivity: '生產力工具',
  other: '其他'
}

const PresetSubscriptions = ({ presets, onAddPreset }: PresetSubscriptionsProps) => {
  const categories = [...new Set(presets.map(preset => preset.category))]

  return (
    <Box
      bg="whiteAlpha.50"
      backdropFilter="blur(10px)"
      borderRadius="xl"
      border="1px solid"
      borderColor="whiteAlpha.200"
      p={6}
    >
      <Heading size="md" mb={6} color="whiteAlpha.900">
        快速添加常用訂閱服務
      </Heading>
      <Tabs variant="soft-rounded" colorScheme="blue">
        <TabList mb={4} gap={2}>
          {categories.map(category => (
            <Tab
              key={category}
              color="whiteAlpha.800"
              _selected={{
                bg: "whiteAlpha.200",
                color: "white"
              }}
            >
              {categoryLabels[category]}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {categories.map(category => (
            <TabPanel key={category} p={0}>
              <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
                {presets
                  .filter(preset => preset.category === category)
                  .map(preset => (
                    <Button
                      key={preset.id}
                      onClick={() => onAddPreset(preset)}
                      height="auto"
                      p={6}
                      bg="whiteAlpha.100"
                      border="1px solid"
                      borderColor="whiteAlpha.200"
                      _hover={{
                        bg: "whiteAlpha.200",
                        transform: "translateY(-2px)",
                        boxShadow: "lg"
                      }}
                      _active={{
                        bg: "whiteAlpha.300"
                      }}
                    >
                      <VStack spacing={2} align="stretch" width="100%">
                        <Text 
                          color="white" 
                          fontWeight="bold"
                          fontSize="lg"
                        >
                          {preset.name}
                        </Text>
                        <Text 
                          color="blue.300" 
                          fontSize="xl" 
                          fontWeight="bold"
                        >
                          NT$ {preset.monthlyFee}
                        </Text>
                        <Text 
                          color="whiteAlpha.700" 
                          fontSize="sm"
                        >
                          每月
                        </Text>
                      </VStack>
                    </Button>
                  ))}
              </SimpleGrid>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default PresetSubscriptions 