import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useToast
} from '@chakra-ui/react'
import { useState } from 'react'
import { Subscription, SubscriptionCategory } from '../types/subscription'

interface SubscriptionFormProps {
  isOpen: boolean
  onClose: () => void
  onAdd: (subscription: Subscription) => void
}

const SubscriptionForm = ({ isOpen, onClose, onAdd }: SubscriptionFormProps) => {
  const [name, setName] = useState('')
  const [monthlyFee, setMonthlyFee] = useState('')
  const [category, setCategory] = useState<SubscriptionCategory>('streaming')
  const toast = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name || !monthlyFee) {
      toast({
        title: '請填寫所有欄位',
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
      return
    }

    const subscription: Subscription = {
      id: Date.now().toString(),
      name,
      monthlyFee: parseFloat(monthlyFee),
      category
    }

    onAdd(subscription)
    setName('')
    setMonthlyFee('')
    setCategory('streaming')
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent
        bg="whiteAlpha.50"
        backdropFilter="blur(10px)"
        borderRadius="xl"
        border="1px solid"
        borderColor="whiteAlpha.200"
        p={0}
      >
        <ModalHeader 
          bgGradient="linear(to-r, teal.400, green.500)" 
          bgClip="text"
          borderBottom="1px solid"
          borderColor="whiteAlpha.200"
          pb={4}
        >
          新增訂閱服務
        </ModalHeader>
        <ModalCloseButton color="whiteAlpha.800" />
        <ModalBody p={6}>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl>
                <FormLabel color="whiteAlpha.900">訂閱服務名稱</FormLabel>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="輸入服務名稱"
                  bg="whiteAlpha.100"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  _hover={{
                    borderColor: "whiteAlpha.300"
                  }}
                  _focus={{
                    borderColor: "teal.300",
                    boxShadow: "0 0 0 1px teal.300"
                  }}
                />
              </FormControl>

              <FormControl>
                <FormLabel color="whiteAlpha.900">月費 (NT$)</FormLabel>
                <Input
                  value={monthlyFee}
                  onChange={(e) => setMonthlyFee(e.target.value)}
                  type="number"
                  placeholder="輸入月費金額"
                  bg="whiteAlpha.100"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  _hover={{
                    borderColor: "whiteAlpha.300"
                  }}
                  _focus={{
                    borderColor: "teal.300",
                    boxShadow: "0 0 0 1px teal.300"
                  }}
                />
              </FormControl>

              <FormControl>
                <FormLabel color="whiteAlpha.900">類別</FormLabel>
                <Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as SubscriptionCategory)}
                  bg="whiteAlpha.100"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  _hover={{
                    borderColor: "whiteAlpha.300"
                  }}
                  _focus={{
                    borderColor: "teal.300",
                    boxShadow: "0 0 0 1px teal.300"
                  }}
                >
                  <option value="streaming">串流影音</option>
                  <option value="music">音樂服務</option>
                  <option value="storage">雲端儲存</option>
                  <option value="gaming">遊戲服務</option>
                  <option value="productivity">生產力工具</option>
                  <option value="other">其他</option>
                </Select>
              </FormControl>

              <Button
                type="submit"
                w="full"
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
                新增訂閱
              </Button>
            </VStack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default SubscriptionForm 