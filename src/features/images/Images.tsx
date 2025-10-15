/* @author: dwclake
 * @created: 10-15-2025
 *
 * The redux slice responsible for managing the fetching
 * and storing of image resources
 */

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
