
interface UserType {
  name:string;
  email:string;
  role:string;
  image:string;
  id:number}
  export async function getClients():Promise<UserType[]> 
  {
    const res =await fetch('/api/admin/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
       cache: 'no-store', next: { revalidate: 0 } 
    }) 
        return res.json()
      
    }