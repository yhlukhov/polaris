// localhost:3000/api/demo/blocking
import { generateText } from 'ai'
import { openai } from '@ai-sdk/openai'

export async function POST() {
  const response = await generateText({
    model: openai('gpt-6-luna'), // gpt-6.1-sol
    prompt: 'Write a simple recipe for fried potatoe',
  })
  return Response.json(response.output)
}

const jsn = {
  initialResponseMessages: [],
  steps: [
    {
      callId: 'call-Aali9Zfz5k7gfeKqQUc7YrX1',
      stepNumber: 0,
      model: { provider: 'openai.responses', modelId: 'gpt-6-luna' },
      runtimeContext: {},
      toolsContext: {},
      content: [
        {
          type: 'reasoning',
          text: '',
          providerMetadata: {
            openai: {
              itemId: 'rs_014a900a97e42581006ada452f037487d296947e73849fb449',
              reasoningEncryptedContent:
                'gAAAAABq2kUxiVRIYEjvaPrTzYzL2YmPYcwaJacr0P5z-DrWqMp0NyLJAEZrVauRCTZYLK_gTnWHe7kaI417jLDbrBzzeOxvGRdJz1QJS1k4SPYiiEBGIHuVXt4OOfl0FeqhUDmwFctYHd1cY8B64-MoIE3sX0maka7DYmn1OI3JQSbhLG8FiZMh1CQ06MuZ0QNoWkw2mHwndk6lHYQl4Aa4NgZKoj2-tMk7aXhyr7qYfojcwOmtGKZ435aILUD7rmfJlv0XHyd17h0IdGDfBX_g52-_YHdabI4bwr7yfyi5ZJj99X8SXe3MAvUwswgBxU0IXAMZA2hoMFFOjGOx31Egy8Y8pa_nlbnRn0jA9RQUHsRTzory3SOMppl6yi4KzUdnrPfFGpL0ysH26PlgFuwtUtN8qDjEUQhm8hU_CSZ_GGGZAL_HEsei1NWqHkhtUBDW3v09aJvYDqmykgdwEXHnlVb3e1ui9Iaj_Lxq0vKZ1Zj9XatZn9P8VGJkQEKXl7HfBLLY_tJN3-N_btJo2993rj-nKWn6FPys3AnAFQt5kApjSYEOiP5O4R-C3Q0E5quF7IK2ue1kazmB-T_DVHsbuowtQy9ngIkJ1gtwRFKin_XUqBY4nYYFfCdICFKObQsKMlSsXBBvIcDWRTiSHDL2HpQyCgTRsblrsUXVFxwrlcG20u3hpB5j7skly6UU17e5TRSUvmdfhHhUEaK-XMAv5oLdlMF-Fu9cLq9sbUHifhRyb4dHdOAwekjJNNy326ubk4KBhqGFweTkvCH84sr3X04vClOCOaTxcE_HcibwHDafHuNZZkb269QdmefbkZ5yuCfyF7JwO1-IPHwnIsNyXFxnFvf54aoXWoVU97cGxdCoVWbZF3FfVChk8QNrRPj5F7YgLWLBquMuW7oAGAMUDad-Vy7vvs5uY0bwJWAIOht7UUgLeVJ1Cwr_rk-l8a4vw9H8VDqVu7V9rK3Ebva2haGX9grajfoVO1k9jaLF4C99Kbgn3osYbKmt3lNsZjMwlTmsmKdqoR60HJrE9dWBx4uA1d4z9HbTeaARfUGJBIM5rC4TxoxopINATAE8QU-Lda6JNxkDxTSgPl-7lvvS0zmboCn5yS9_3epFenB5wEtNo5ZKoHFSIXDU7lPyZ205J66l5PMX7ZPNAJgm0XiwuyY31o-z4I09m0tYF2p8g_lDHzCQ-XwpQ7mU5svhj7kdgm6mpsxFu21fTFgduMdBN8oaZSmCxIDdpAy6Wt41-rJ6Y94WopnMroGe46lcXuGJR7dg6MG6zlsJPDsMvVazGCqHwJZtX-OIr1VkpznB6oauTt8hd51vuChEBSAqJuIx0VQTNP1d-_xH3ZGIUfGMDPN19piNRkR91MhPJHtyKH4tjd3P40czzilngTs9c5n6szYZMg-WNsdFi7HTFJKxK46-rSWAsTtaOLtKMUc_6O3veKx5zmmDfeXgvPFRhhURb2RfV0BDhuRY4tQnRJrsb_Rq5A-VQCUDmV25TL9bPAMo3lUUQTtn2fm6ueCDW8jJ5OAGbzw1qzWkl8BKHEFrwGkr226dorE0LYiTzQsaK9eQ8ng5zhZz60BKxANy2Ecl6HjhOSt1CrRTcX7ov-h88BcXongHBI86CenLQRKGqg6cAUDvn4bRi-YfgkRtjym6vjfExRvdKouRGLwqD8JBwHL0UxBuj-PFG1EgILeJZ5y_OG6SfE8TtoFHOlp-pf972hj8QkbdC6MRF-2uXD7iZiD0ubddGWZELLhXdsKMrGH0GEk7O07p1le691RNTw7mwrf-pVB78MIIkt5Yem584rASchM7vTeHfiLdKPlDY0F-Yg4pmnI=',
            },
          },
        },
        {
          type: 'text',
          text: '## Simple Fried Potatoes\n\n**Ingredients**\n- 2 medium potatoes\n- 1–2 tablespoons oil\n- Salt and pepper\n- Optional: paprika, garlic powder, or chopped onion\n\n**Instructions**\n1. Wash the potatoes and cut them into small cubes or thin slices.\n2. Heat the oil in a skillet over medium heat.\n3. Add the potatoes and season with salt and pepper.\n4. Cook for 15–20 minutes, stirring occasionally, until golden and tender. Add a splash of water and cover the pan briefly if they’re browning before they soften.\n5. Add any optional seasonings and serve hot.',
          providerMetadata: {
            openai: {
              itemId: 'msg_014a900a97e42581006ada452f7f3087d29d7515215385dfcd',
              phase: 'final_answer',
            },
          },
        },
      ],
      finishReason: 'stop',
      usage: {
        inputTokens: 14,
        inputTokenDetails: {
          noCacheTokens: 14,
          cacheReadTokens: 0,
          cacheWriteTokens: 0,
        },
        outputTokens: 168,
        outputTokenDetails: { textTokens: 136, reasoningTokens: 32 },
        totalTokens: 182,
        raw: {
          input_tokens: 14,
          input_tokens_details: { cache_write_tokens: 0, cached_tokens: 0 },
          output_tokens: 168,
          output_tokens_details: { reasoning_tokens: 32 },
          total_tokens: 182,
        },
      },
      performance: {
        effectiveOutputTokensPerSecond: 36.46103151296581,
        effectiveTotalTokensPerSecond: 39.49945080571296,
        stepTimeMs: 4608.265699999873,
        responseTimeMs: 4607.658999999985,
        toolExecutionMs: {},
      },
      warnings: [],
      request: {},
      response: {
        id: 'resp_014a900a97e42581006ada452df7f087d2963063741d0aa2b6',
        timestamp: '2026-10-22T17:17:33.000Z',
        modelId: 'gpt-6-luna',
        headers: {
          'access-control-expose-headers': 'X-Request-ID, CF-Ray, CF-Ray',
          'alt-svc': 'h3=":443"; ma=86400',
          'cf-cache-status': 'DYNAMIC',
          'cf-ray': 'a4ea27fa5af82d37-KBP',
          'content-encoding': 'br',
          'content-type': 'application/json',
          date: 'Thu, 22 Oct 2026 17:17:37 GMT',
          'openai-organization': 'my-org-5ndpkj',
          'openai-processing-ms': '3510',
          'openai-project': 'proj_4a78aj5dQekEgDzC1sZXIbIY',
          'openai-version': '2020-10-01',
          server: 'cloudflare',
          'set-cookie':
            '__cf_bm=qpwun5ovFOo2MWalGo.VSr4pL73f173x4L_T7mADaxU-1792689453.183664-1.0.1.1-YIZ7TOvsQ2NP0NXoYKhWktQTToJ2nnScbGFYd4APZvtZbFWDP_T2oxAza1CP3dzqc776Z4AIoD.Wlu_aWrVa40CfOWKlkn0L.Glzpo.1p14F4MfrcuAhUjcX7caV_Bas; HttpOnly; SameSite=None; Secure; Path=/; Domain=api.openai.com; Expires=Thu, 22 Oct 2026 17:47:37 GMT',
          'strict-transport-security':
            'max-age=31536000; includeSubDomains; preload',
          'x-content-type-options': 'nosniff',
          'x-ratelimit-limit-requests': '5000',
          'x-ratelimit-limit-tokens': '2000000',
          'x-ratelimit-remaining-requests': '4999',
          'x-ratelimit-remaining-tokens': '1999975',
          'x-ratelimit-reset-requests': '12ms',
          'x-ratelimit-reset-tokens': '0s',
          'x-request-id': 'req_00e1ce06b5de4fd7a70ed7a86574f08a',
        },
        messages: [
          {
            role: 'assistant',
            content: [
              {
                type: 'reasoning',
                text: '',
                providerOptions: {
                  openai: {
                    itemId:
                      'rs_014a900a97e42581006ada452f037487d296947e73849fb449',
                    reasoningEncryptedContent:
                      'gAAAAABq2kUxiVRIYEjvaPrTzYzL2YmPYcwaJacr0P5z-DrWqMp0NyLJAEZrVauRCTZYLK_gTnWHe7kaI417jLDbrBzzeOxvGRdJz1QJS1k4SPYiiEBGIHuVXt4OOfl0FeqhUDmwFctYHd1cY8B64-MoIE3sX0maka7DYmn1OI3JQSbhLG8FiZMh1CQ06MuZ0QNoWkw2mHwndk6lHYQl4Aa4NgZKoj2-tMk7aXhyr7qYfojcwOmtGKZ435aILUD7rmfJlv0XHyd17h0IdGDfBX_g52-_YHdabI4bwr7yfyi5ZJj99X8SXe3MAvUwswgBxU0IXAMZA2hoMFFOjGOx31Egy8Y8pa_nlbnRn0jA9RQUHsRTzory3SOMppl6yi4KzUdnrPfFGpL0ysH26PlgFuwtUtN8qDjEUQhm8hU_CSZ_GGGZAL_HEsei1NWqHkhtUBDW3v09aJvYDqmykgdwEXHnlVb3e1ui9Iaj_Lxq0vKZ1Zj9XatZn9P8VGJkQEKXl7HfBLLY_tJN3-N_btJo2993rj-nKWn6FPys3AnAFQt5kApjSYEOiP5O4R-C3Q0E5quF7IK2ue1kazmB-T_DVHsbuowtQy9ngIkJ1gtwRFKin_XUqBY4nYYFfCdICFKObQsKMlSsXBBvIcDWRTiSHDL2HpQyCgTRsblrsUXVFxwrlcG20u3hpB5j7skly6UU17e5TRSUvmdfhHhUEaK-XMAv5oLdlMF-Fu9cLq9sbUHifhRyb4dHdOAwekjJNNy326ubk4KBhqGFweTkvCH84sr3X04vClOCOaTxcE_HcibwHDafHuNZZkb269QdmefbkZ5yuCfyF7JwO1-IPHwnIsNyXFxnFvf54aoXWoVU97cGxdCoVWbZF3FfVChk8QNrRPj5F7YgLWLBquMuW7oAGAMUDad-Vy7vvs5uY0bwJWAIOht7UUgLeVJ1Cwr_rk-l8a4vw9H8VDqVu7V9rK3Ebva2haGX9grajfoVO1k9jaLF4C99Kbgn3osYbKmt3lNsZjMwlTmsmKdqoR60HJrE9dWBx4uA1d4z9HbTeaARfUGJBIM5rC4TxoxopINATAE8QU-Lda6JNxkDxTSgPl-7lvvS0zmboCn5yS9_3epFenB5wEtNo5ZKoHFSIXDU7lPyZ205J66l5PMX7ZPNAJgm0XiwuyY31o-z4I09m0tYF2p8g_lDHzCQ-XwpQ7mU5svhj7kdgm6mpsxFu21fTFgduMdBN8oaZSmCxIDdpAy6Wt41-rJ6Y94WopnMroGe46lcXuGJR7dg6MG6zlsJPDsMvVazGCqHwJZtX-OIr1VkpznB6oauTt8hd51vuChEBSAqJuIx0VQTNP1d-_xH3ZGIUfGMDPN19piNRkR91MhPJHtyKH4tjd3P40czzilngTs9c5n6szYZMg-WNsdFi7HTFJKxK46-rSWAsTtaOLtKMUc_6O3veKx5zmmDfeXgvPFRhhURb2RfV0BDhuRY4tQnRJrsb_Rq5A-VQCUDmV25TL9bPAMo3lUUQTtn2fm6ueCDW8jJ5OAGbzw1qzWkl8BKHEFrwGkr226dorE0LYiTzQsaK9eQ8ng5zhZz60BKxANy2Ecl6HjhOSt1CrRTcX7ov-h88BcXongHBI86CenLQRKGqg6cAUDvn4bRi-YfgkRtjym6vjfExRvdKouRGLwqD8JBwHL0UxBuj-PFG1EgILeJZ5y_OG6SfE8TtoFHOlp-pf972hj8QkbdC6MRF-2uXD7iZiD0ubddGWZELLhXdsKMrGH0GEk7O07p1le691RNTw7mwrf-pVB78MIIkt5Yem584rASchM7vTeHfiLdKPlDY0F-Yg4pmnI=',
                  },
                },
              },
              {
                type: 'text',
                text: '## Simple Fried Potatoes\n\n**Ingredients**\n- 2 medium potatoes\n- 1–2 tablespoons oil\n- Salt and pepper\n- Optional: paprika, garlic powder, or chopped onion\n\n**Instructions**\n1. Wash the potatoes and cut them into small cubes or thin slices.\n2. Heat the oil in a skillet over medium heat.\n3. Add the potatoes and season with salt and pepper.\n4. Cook for 15–20 minutes, stirring occasionally, until golden and tender. Add a splash of water and cover the pan briefly if they’re browning before they soften.\n5. Add any optional seasonings and serve hot.',
                providerOptions: {
                  openai: {
                    itemId:
                      'msg_014a900a97e42581006ada452f7f3087d29d7515215385dfcd',
                    phase: 'final_answer',
                  },
                },
              },
            ],
          },
        ],
      },
      providerMetadata: {
        openai: {
          responseId: 'resp_014a900a97e42581006ada452df7f087d2963063741d0aa2b6',
          serviceTier: 'default',
          reasoningContext: 'all_turns',
        },
      },
    },
  ],
  _output:
    '## Simple Fried Potatoes\n\n**Ingredients**\n- 2 medium potatoes\n- 1–2 tablespoons oil\n- Salt and pepper\n- Optional: paprika, garlic powder, or chopped onion\n\n**Instructions**\n1. Wash the potatoes and cut them into small cubes or thin slices.\n2. Heat the oil in a skillet over medium heat.\n3. Add the potatoes and season with salt and pepper.\n4. Cook for 15–20 minutes, stirring occasionally, until golden and tender. Add a splash of water and cover the pan briefly if they’re browning before they soften.\n5. Add any optional seasonings and serve hot.',
  totalUsage: {
    inputTokens: 14,
    inputTokenDetails: {
      noCacheTokens: 14,
      cacheReadTokens: 0,
      cacheWriteTokens: 0,
    },
    outputTokens: 168,
    outputTokenDetails: { textTokens: 136, reasoningTokens: 32 },
    totalTokens: 182,
    raw: {
      input_tokens: 14,
      input_tokens_details: { cache_write_tokens: 0, cached_tokens: 0 },
      output_tokens: 168,
      output_tokens_details: { reasoning_tokens: 32 },
      total_tokens: 182,
    },
  },
}
