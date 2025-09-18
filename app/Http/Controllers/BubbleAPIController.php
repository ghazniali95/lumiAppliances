<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class BubbleAPIController extends Controller
{
    public function categories()
    {
        $response = Http::get('https://www.constructy.co.nz/version-test/api/1.1/obj/subcategory?constraints='.urlencode('[{"key":"RelatedCategory","constraint_type":"equals","value":"'.config('bubble.category.id').'"}]'));

        return response($response->body(), $response->status())
            ->header('Content-Type', $response->header('Content-Type'));
    }

    public function products(Request $request)
    {
        $constraints = [];

        // 👇 Fixed RelatedCategory constraint
        $constraints[] = [
            'key' => 'RelatedCategory',
            'constraint_type' => 'equals',
            'value' => config('bubble.category.id'),
        ];

        // 👇 Optional subcategory filter
        if ($request->filled('category')) {
            $slugToIdMap = [
                'benchtop' => '1757506951699x591648309685490000',
                'handles'  => '1757506918991x846951279864577500',
                'basins'   => '1757506894922x824271512850405500',
            ];

            $slug = $request->get('category');

            if (isset($slugToIdMap[$slug])) {
                $constraints[] = [
                    'key' => 'RelatedSubCategory',
                    'constraint_type' => 'equals',
                    'value' => $slugToIdMap[$slug],
                ];
            }
        }

        // ✅ Pagination handling
        $limit = 8; // fixed limit
        $cursor = 0;

        if ($request->filled('cursor')) {
            $cursor = max(0, intval($request->get('cursor'))); // next page cursor
        }

        // Bubble API call
        $url = 'https://www.constructy.co.nz/version-test/api/1.1/obj/product';
        $url .= '?constraints=' . urlencode(json_encode($constraints));
        $url .= '&limit=' . $limit;
        $url .= '&cursor=' . $cursor;

        $response = Http::get($url);

        return response($response->body(), $response->status())
            ->header('Content-Type', $response->header('Content-Type'));
    }




    public function productDetail($slug)
    {
        $response = Http::get('https://www.constructy.co.nz/version-test/api/1.1/obj/product?constraints='.urlencode('[{"key":"Slug","constraint_type":"equals","value":"'.$slug.'"}]'));

        return response($response->body(), $response->status())
            ->header('Content-Type', $response->header('Content-Type'));
    }

    public function galleryCategories()
    {
        $response = Http::get("https://www.constructy.co.nz/version-test/api/1.1/obj/gallerycategory");

        return response($response->body(), $response->status())
            ->header('Content-Type', $response->header('Content-Type'));
    }

    public function gallery()
    {
        $response = Http::get('https://www.constructy.co.nz/version-test/api/1.1/obj/gallery?constraints='.urlencode('[{"key":"RelatedCategory","constraint_type":"equals","value":"'.config('bubble.category.id').'"}]'));

        return response($response->body(), $response->status())
            ->header('Content-Type', $response->header('Content-Type'));
    }


}
