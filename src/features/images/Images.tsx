import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit"

type Image = {
    src: string
}

const images = createSlice({
    name: 'images',
    initialState: {
        items: [] as Image[],
        status: 'idle',
        error: null as string | null
    },
    reducers: {
        
    },
    extraReducers: (builder) => {

    }
})

export const {} = images.actions
export default images.reducer
