import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import CheckRecordsForm from '@/components/CheckRecords/CheckRecordsForm'

const queryClient = new QueryClient()

const EmailRecordsComponent = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<CheckRecordsForm />
		</QueryClientProvider>
	)
}

export default EmailRecordsComponent
