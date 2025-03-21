import {
  SimpleGrid,
  Text,
  Card,
  CardBody,
  Stack,
  Heading,
  Box
} from '@chakra-ui/react'
import { Subscription } from '../types/subscription'

interface SubscriptionSummaryProps {
  subscriptions: Subscription[]
}

const SubscriptionSummary = ({ subscriptions }: SubscriptionSummaryProps) => {
  const monthlyTotal = subscriptions.reduce((sum, sub) => sum + sub.monthlyFee, 0)
  const yearlyTotal = monthlyTotal * 12

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
      <Card
        bg="whiteAlpha.50"
        backdropFilter="blur(10px)"
        borderRadius="xl"
        border="1px solid"
        borderColor="whiteAlpha.200"
        overflow="hidden"
      >
        <Box 
          bg="blue.500" 
          p={1} 
          bgGradient="linear(to-r, blue.400, purple.500)"
        />
        <CardBody p={6}>
          <Stack spacing={4}>
            <Heading size="md" color="whiteAlpha.900">每月總支出</Heading>
            <Text 
              fontSize="4xl" 
              fontWeight="bold"
              bgGradient="linear(to-r, blue.400, purple.500)"
              bgClip="text"
            >
              NT$ {monthlyTotal.toLocaleString()}
            </Text>
          </Stack>
        </CardBody>
      </Card>

      <Card
        bg="whiteAlpha.50"
        backdropFilter="blur(10px)"
        borderRadius="xl"
        border="1px solid"
        borderColor="whiteAlpha.200"
        overflow="hidden"
      >
        <Box 
          bg="purple.500" 
          p={1} 
          bgGradient="linear(to-r, purple.500, pink.500)"
        />
        <CardBody p={6}>
          <Stack spacing={4}>
            <Heading size="md" color="whiteAlpha.900">預估年度支出</Heading>
            <Text 
              fontSize="4xl" 
              fontWeight="bold"
              bgGradient="linear(to-r, purple.500, pink.500)"
              bgClip="text"
            >
              NT$ {yearlyTotal.toLocaleString()}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </SimpleGrid>
  )
}

export default SubscriptionSummary 