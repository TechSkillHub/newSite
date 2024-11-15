

export const registerUser = async (data:object) => {
  const router = useRouter();
  const modal = useModalStore();
  const loading = useLoadingStore();

  loading.showLoading();

  await useFetchData<{ titulo: string; mensagem: string }>(
    "/api/auth/register",
    {
      method: "POST",
      body: data,
      // requiresCaptcha: true,
    },
  )
    .then(response => {      
      modal.showModal({
        ...response,
        btnText: "OK",
      });
      router.push("/");
    })
    .catch(error => {      
      throw error
    })
    .finally(() => {
      loading.closeLoading();
    });
};

// Coming Soon

// Get User Data
// Edit User
// New Password (Change)
// Delete User