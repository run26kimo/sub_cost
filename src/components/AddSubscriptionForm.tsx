import { useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CloseButton,
  useToast,
  Stack
} from '@chakra-ui/react'
import { Subscription } from '../types/subscription'

interface AddSubscriptionFormProps {
  onAdd: (subscription: Subscription) => void
}

const AddSubscriptionForm = ({ onAdd }: AddSubscriptionFormProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const [formData, setFormData] = useState({
    name: '',
    monthlyFee: '',
    category: 'other'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subscription: Subscription = {
      id: Date.now().toString(),
      name: formData.name,
      monthlyFee: Number(formData.monthlyFee),
      category: formData.category as Subscription['category']
    }
    onAdd(subscription)
    setFormData({ name: '', monthlyFee: '', category: 'other' })
    onClose()
    toast({
      title: '已新增訂閱服務',
      description: `${subscription.name} 已成功新增`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }

  return (
    <Box>
      <Button colorScheme="blue" onClick={onOpen} width="full">
        新增訂閱服務
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            新增訂閱服務
            <CloseButton position="absolute" right={3} top={3} onClick={onClose} />
          </ModalHeader>
          <form onSubmit={handleSubmit}>
            <ModalBody>
              <Stack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>服務名稱</FormLabel>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="輸入服務名稱"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>每月費用 (NT$)</FormLabel>
                  <Input
                    type="number"
                    value={formData.monthlyFee}
                    onChange={(e) => setFormData({ ...formData, monthlyFee: e.target.value })}
                    placeholder="輸入每月費用"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>類別</FormLabel>
                  <Select
                    value={formData.category}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => 
                      setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="storage">儲存空間</option>
                    <option value="streaming">串流媒體</option>
                    <option value="productivity">生產力工具</option>
                    <option value="ai">人工智能</option>
                    <option value="other">其他</option>
                  </Select>
                </FormControl>
              </Stack>
            </ModalBody>

            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={onClose}>
                取消
              </Button>
              <Button colorScheme="blue" type="submit">
                新增
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default AddSubscriptionForm 