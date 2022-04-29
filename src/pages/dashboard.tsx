import { SimpleGrid, Flex, Box, Text, theme } from '@chakra-ui/react'
import dynamic                                from 'next/dynamic'

import { Header }   from '../components/Header'
import { Siderbar } from '../components/Sidebar'

import { ApexOptions } from 'apexcharts'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    labels: {
      datetimeFormatter: {
        year: 'yyyy',
        month: 'MMM \'yy',
        day: 'dd MMM',
        hour: 'HH:mm'
      }
    },
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2022-04-23T00:00:00.000Z',
      '2022-04-24T00:00:00.000Z',
      '2022-04-25T00:00:00.000Z',
      '2022-04-26T00:00:00.000Z',
      '2022-04-27T00:00:00.000Z',
      '2022-04-28T00:00:00.000Z',
      '2022-04-29T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  }
}

const series = [
  {
    name: 'series1',
    data: [31, 120, 10, 28, 61, 18, 109]
  }
]

export default function Dashboard() {
  return (
    <Flex
      direction="column"
      h="100vh">
      <Header />

      <Flex
        w="100%"
        maxW={1480}
        mx="auto"
        my="6"
        px="6">
        <Siderbar />

        <SimpleGrid
          flex="1"
          gap="4"
          alignSelf="flex-start"
          minChildWidth="320px">
          <Box
            p="8"
            pb="4"
            borderRadius={8}
            bg="gray.800">
              <Text
                fontSize="lg"
                mb="4">
                  Inscritos da Semana
              </Text>

              <Chart
                type="area"
                options={options}
                series={series}
                height={160}
              />
          </Box>

          <Box
            p="8"
            borderRadius={8}
            bg="gray.800">
              <Text
                fontSize="lg"
                mb="4">
                  Taxa de Abertura
              </Text>

              <Chart
                type="area"
                options={options}
                series={series}
                height={160}
              />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}