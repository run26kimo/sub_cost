import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Text,
  Badge,
  TableContainer,
  useColorModeValue
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { Subscription } from '../types/subscription'

interface SubscriptionListProps {
  subscriptions: Subscription[]
  onRemove: (id: string) => void
}

const getCategoryColor = (category: Subscription['category']) => {
  const colors = {
    streaming: 'red',
    music: 'purple',
    storage: 'blue',
    ai: 'pink',
    productivity: 'green',
    gaming: 'orange',
    other: 'gray'
  }
  return colors[category]
}

const getCategoryLabel = (category: Subscription['category']) => {
  const labels = {
    streaming: '串流影音',
    music: '音樂串流',
    storage: '雲端儲存',
    ai: 'AI 服務',
    productivity: '生產力工具',
    gaming: '遊戲訂閱',
    other: '其他'
  }
  return labels[category]
}

const SubscriptionList = ({ subscriptions, onRemove }: SubscriptionListProps) => {
  if (subscriptions.length === 0) {
    return (
      <Box 
        p={8} 
        textAlign="center" 
        bg="whiteAlpha.50"
        backdropFilter="blur(10px)"
        borderRadius="xl"
        border="1px solid"
        borderColor="whiteAlpha.200"
      >
        <Text color="whiteAlpha.600">尚未添加任何訂閱服務</Text>
      </Box>
    )
  }

  const sortedSubscriptions = [...subscriptions].sort((a, b) => {
    if (a.category === b.category) {
      return a.name.localeCompare(b.name)
    }
    return a.category.localeCompare(b.category)
  })

  return (
    <Box 
      overflowX="auto"
      bg="whiteAlpha.50"
      backdropFilter="blur(10px)"
      borderRadius="xl"
      border="1px solid"
      borderColor="whiteAlpha.200"
      p={4}
    >
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th color="whiteAlpha.800">服務名稱</Th>
              <Th color="whiteAlpha.800">類別</Th>
              <Th isNumeric color="whiteAlpha.800">每月費用</Th>
              <Th width="50px"></Th>
            </Tr>
          </Thead>
          <Tbody>
            {sortedSubscriptions.map(subscription => (
              <Tr 
                key={subscription.id}
                _hover={{
                  bg: 'whiteAlpha.100',
                }}
                transition="all 0.2s"
              >
                <Td color="white">{subscription.name}</Td>
                <Td>
                  <Badge 
                    colorScheme={getCategoryColor(subscription.category)}
                    px={3}
                    py={1}
                    borderRadius="full"
                  >
                    {getCategoryLabel(subscription.category)}
                  </Badge>
                </Td>
                <Td isNumeric>
                  <Text
                    color="white"
                    fontWeight="bold"
                    bgGradient="linear(to-r, blue.400, purple.500)"
                    bgClip="text"
                  >
                    NT$ {subscription.monthlyFee}
                  </Text>
                </Td>
                <Td>
                  <IconButton
                    aria-label="刪除訂閱"
                    onClick={() => onRemove(subscription.id)}
                    icon={<DeleteIcon />}
                    size="sm"
                    colorScheme="red"
                    variant="ghost"
                    _hover={{
                      bg: 'whiteAlpha.200',
                    }}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default SubscriptionList 