"use client"

import { useState } from "react"
import { Input } from "./ui/input.jsx"
import { Button } from "./ui/button.jsx";
import { Loader2 } from "lucide-react";

export default function AddProductForm({ user }) {

  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <>
      <form className="w-full max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-2">
          <Input type="url"
            placeholder="Product URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="h-12 text-base"
            required
            disabled={loading}

          />



          <Button className="bg-orange-500 hover:bg-orange-600 h-10 sm:h-12 px-8"
            type="submit"
            disabled={loading}
            size={"lg"}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Adding..
              </>
            ) : (
              "Track Price"
            )}
          </Button>
        </div>


      </form>

    </>
  )
}
