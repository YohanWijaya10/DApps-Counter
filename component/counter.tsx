    'use client'
    import { TransactionButton} from "thirdweb/react";
    import { useReadContract } from "thirdweb/react";
    import { contract } from "../utils/constants";
    import { prepareContractCall } from "thirdweb"
    import { useSendTransaction } from "thirdweb/react";



    const counter: React.FC = () =>{
        const { mutate: sendTransaction } = useSendTransaction();
        const { data: count, isLoading: loadingCount, refetch } = useReadContract({
            contract : contract,
            method: "function count() view returns (uint256)",
            params: []
        });
        return (
            <div> 
            <h1>counter</h1>
            {loadingCount ? (
                    <h2>..</h2>
            ) : (
                    <h2>{count?.toString()}</h2>

            )}
            <div>
            <div style={{
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',  // Menambahkan padding kiri dan kanan untuk container
}}>
  <div style={{
    display: 'inline-flex',
    paddingRight: '20px', // Menambahkan padding kanan di kiri
  }}>
    <TransactionButton 
      transaction={() => prepareContractCall({
        contract: contract,
        method: "function decrement()",
      })}
      onTransactionSent={() => console.log("decrementing..")}
      onTransactionConfirmed={() => refetch()}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
      }}
    >
      -
    </TransactionButton>
  </div>

  <div style={{
    display: 'inline-flex',
    paddingLeft: '20px', // Menambahkan padding kiri di kanan
  }}>
    <TransactionButton 
      transaction={() => prepareContractCall({
        contract: contract,
        method: "function increment()",
      })}
      onTransactionSent={() => console.log("incrementing..")}
      onTransactionConfirmed={() => refetch()}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
      }}
    >
      +
    </TransactionButton>
  </div>
</div>

           
            </div>
            </div>
        )
    }

    export default counter;