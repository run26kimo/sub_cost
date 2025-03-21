import { useState } from 'react'
import { 
  ChakraProvider, 
  Container, 
  Heading, 
  VStack, 
  Text, 
  extendTheme, 
  Box,
  Button,
  useDisclosure
} from '@chakra-ui/react'
import { Subscription, PRESET_SUBSCRIPTIONS } from './types/subscription'
import SubscriptionList from './components/SubscriptionList'
import SubscriptionForm from './components/SubscriptionForm'
import SubscriptionSummary from './components/SubscriptionSummary'
import PresetSubscriptions from './components/PresetSubscriptions'
import { AddIcon } from '@chakra-ui/icons'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'white',
        backgroundImage: 'linear-gradient(to bottom right, rgba(66, 153, 225, 0.1), rgba(236, 201, 75, 0.05))',
        backgroundAttachment: 'fixed',
      }
    }
  },
  components: {
    Button: {
      baseStyle: {
        _hover: {
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        },
        transition: 'all 0.2s',
      }
    },
    Card: {
      baseStyle: {
        container: {
          backgroundColor: 'whiteAlpha.50',
          backdropFilter: 'blur(10px)',
          borderRadius: 'xl',
          border: '1px solid',
          borderColor: 'whiteAlpha.200',
        }
      }
    }
  }
})

function App() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([])
  const { isOpen, onOpen, onClose } = useDisclosure()

  const addSubscription = (subscription: Subscription) => {
    setSubscriptions([...subscriptions, subscription])
    onClose()
  }

  const removeSubscription = (id: string) => {
    setSubscriptions(subscriptions.filter(sub => sub.id !== id))
  }

  const addPresetSubscription = (preset: Subscription) => {
    if (subscriptions.some(sub => sub.id === preset.id)) {
      return
    }
    addSubscription(preset)
  }

  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" py={8}>
        <Container maxW="container.xl">
          <VStack spacing={8} align="stretch">
            <Box textAlign="center" mb={8}>
              <Heading 
                bgGradient="linear(to-r, blue.400, purple.500)" 
                bgClip="text" 
                fontSize={["3xl", "4xl"]}
                mb={4}
              >
                訂閱服務費用計算器
              </Heading>
              <Text fontSize="lg" color="whiteAlpha.800">
                追蹤並管理您的每月訂閱服務費用
              </Text>
            </Box>
            
            <PresetSubscriptions 
              presets={PRESET_SUBSCRIPTIONS} 
              onAddPreset={addPresetSubscription} 
            />
            
            <Button
              leftIcon={<AddIcon />}
              onClick={onOpen}
              bgGradient="linear(to-r, teal.400, green.500)"
              color="white"
              _hover={{
                bgGradient: "linear(to-r, teal.500, green.600)",
                transform: "translateY(-2px)",
                boxShadow: "lg"
              }}
              _active={{
                bgGradient: "linear(to-r, teal.600, green.700)"
              }}
            >
              新增訂閱服務
            </Button>
            
            <SubscriptionList 
              subscriptions={subscriptions} 
              onRemove={removeSubscription} 
            />
            
            <SubscriptionSummary subscriptions={subscriptions} />
          </VStack>
        </Container>
      </Box>

      <SubscriptionForm isOpen={isOpen} onClose={onClose} onAdd={addSubscription} />
    </ChakraProvider>
  )
}

export default App
