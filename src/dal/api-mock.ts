import type {GetTrackDetailsOutput, GetTrackListOutput} from "./api";

export function getTrack(): Promise<GetTrackDetailsOutput> {
    return Promise.resolve({
        "data": {
            "id": "8c1c8624-b409-43cd-9ac3-10b15576feb9",
            "type": "tracks",
            "attributes": {
                "title": "banana6boom - Frontend Жив_part-2",
                "lyrics": "",
                "user": {
                    "id": "26",
                    "name": "Svyat-_b25"
                },
                "releaseDate": "2026-02-26T15:08:51.972Z",
                "addedAt": "2026-02-26T15:10:09.493Z",
                "updatedAt": "2026-07-21T23:20:26.221Z",
                "duration": 0,
                "attachments": [
                    {
                        "id": "33289d06-4879-480b-8b8e-7d19f648d4a5",
                        "addedAt": "2026-02-26T15:09:53.933Z",
                        "updatedAt": "2026-02-26T15:09:53.933Z",
                        "version": 1,
                        "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Video/80ea0459-8537-4d70-914c-ea5ac112cc04_compress (1).mp3",
                        "contentType": "audio/mpeg",
                        "originalName": "compress (1).mp3",
                        "fileSize": 886125
                    }
                ],
                "images": {
                    "main": [
                        {
                            "type": "original",
                            "width": 248,
                            "height": 248,
                            "fileSize": 16472,
                            "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/d28837c8-87a4-446c-8672-5595b53b16a2_Screenshot_438.png"
                        },
                        {
                            "type": "medium",
                            "width": 156,
                            "height": 156,
                            "fileSize": 5280,
                            "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/43683a6d-0ba8-45eb-8974-de94323eeed7_image.png"
                        },
                        {
                            "type": "thumbnail",
                            "width": 48,
                            "height": 48,
                            "fileSize": 976,
                            "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/19252d4f-e73f-4114-9b58-d85cfdd9e9fc_image.png"
                        }
                    ]
                },
                "tags": [],
                "artists": [
                    {
                        "id": "1b516ddd-5916-404a-bb01-b56cfb9922ac",
                        "name": "eminem"
                    }
                ],
                "likesCount": 1,
                "dislikesCount": 1,
                "currentUserReaction": 0,
                "publishedAt": "2026-03-12T15:27:31.311Z",
                "isPublished": true
            }
        }
    });
}

export function getTracks(): Promise<GetTrackListOutput> {
    return Promise.resolve({
        "data": [
            {
                "id": "82fdfd0c-bfbf-4bd9-9088-b9e4a0af870f",
                "type": "tracks",
                "attributes": {
                    "title": "track example",
                    "user": {
                        "id": "1264",
                        "name": "millychak_c92"
                    },
                    "addedAt": "2026-07-01T13:00:32.147Z",
                    "attachments": [
                        {
                            "id": "a1d372be-e990-47fc-ac4a-999dad6a02df",
                            "addedAt": "2026-07-01T16:00:08.835Z",
                            "updatedAt": "2026-07-01T16:00:08.835Z",
                            "version": 1,
                            "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Video/0a619856-a18f-4bf0-bc40-7030afebe394_file_example_MP3_700KB.mp3",
                            "contentType": "audio/mpeg",
                            "originalName": "file_example_MP3_700KB.mp3",
                            "fileSize": 733645
                        }
                    ],
                    "images": {
                        "main": [
                            {
                                "type": "medium",
                                "width": 156,
                                "height": 156,
                                "fileSize": 5142,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/db458617-45c9-463d-9d6c-3e96341b1650_image.png"
                            },
                            {
                                "type": "original",
                                "width": 736,
                                "height": 552,
                                "fileSize": 68910,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/7e7aaa2a-a782-4544-a814-23bb07c2a00f_photo_5_2026-03-08_14-33-49.jpg"
                            },
                            {
                                "type": "thumbnail",
                                "width": 48,
                                "height": 48,
                                "fileSize": 804,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/a5e1ffce-fb00-4196-8d28-9cc8fc7fa750_image.png"
                            }
                        ]
                    },
                    "currentUserReaction": 0,
                    "publishedAt": "2026-07-01T13:00:32.949Z",
                    "likesCount": 2,
                    "isPublished": true,
                    "duration": 42
                },
                "relationships": {
                    "artists": {
                        "data": []
                    }
                }
            },
            {
                "id": "8c1c8624-b409-43cd-9ac3-10b15576feb9",
                "type": "tracks",
                "attributes": {
                    "title": "banana6boom - Frontend Жив_part-2",
                    "user": {
                        "id": "26",
                        "name": "Svyat-_b25"
                    },
                    "addedAt": "2026-02-26T15:10:09.493Z",
                    "attachments": [
                        {
                            "id": "33289d06-4879-480b-8b8e-7d19f648d4a5",
                            "addedAt": "2026-02-26T15:09:53.933Z",
                            "updatedAt": "2026-02-26T15:09:53.933Z",
                            "version": 1,
                            "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Video/80ea0459-8537-4d70-914c-ea5ac112cc04_compress (1).mp3",
                            "contentType": "audio/mpeg",
                            "originalName": "compress (1).mp3",
                            "fileSize": 886125
                        }
                    ],
                    "images": {
                        "main": [
                            {
                                "type": "thumbnail",
                                "width": 48,
                                "height": 48,
                                "fileSize": 976,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/19252d4f-e73f-4114-9b58-d85cfdd9e9fc_image.png"
                            },
                            {
                                "type": "medium",
                                "width": 156,
                                "height": 156,
                                "fileSize": 5280,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/43683a6d-0ba8-45eb-8974-de94323eeed7_image.png"
                            },
                            {
                                "type": "original",
                                "width": 248,
                                "height": 248,
                                "fileSize": 16472,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/d28837c8-87a4-446c-8672-5595b53b16a2_Screenshot_438.png"
                            }
                        ]
                    },
                    "currentUserReaction": 0,
                    "publishedAt": "2026-03-12T15:27:31.311Z",
                    "likesCount": 1,
                    "isPublished": true,
                    "duration": 0
                },
                "relationships": {
                    "artists": {
                        "data": [
                            {
                                "id": "1b516ddd-5916-404a-bb01-b56cfb9922ac",
                                "type": "artists"
                            }
                        ]
                    }
                }
            },
            {
                "id": "cb2fb8f4-0415-4a66-a287-cb97137f9f96",
                "type": "tracks",
                "attributes": {
                    "title": "Do Not Provoke Me (Scorpion)",
                    "user": {
                        "id": "26",
                        "name": "Svyat-_b25"
                    },
                    "addedAt": "2026-03-12T15:26:04.972Z",
                    "attachments": [
                        {
                            "id": "ac218984-de8b-4598-91f7-178d3160be61",
                            "addedAt": "2026-03-12T15:26:02.789Z",
                            "updatedAt": "2026-03-12T15:26:02.789Z",
                            "version": 1,
                            "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Video/033e34a0-eb6f-46c9-a07f-dc4ff64fc3cc_Voicy_Do Not Provoke Me.mp3",
                            "contentType": "audio/mpeg",
                            "originalName": "Voicy_Do Not Provoke Me.mp3",
                            "fileSize": 24691
                        }
                    ],
                    "images": {
                        "main": []
                    },
                    "currentUserReaction": 0,
                    "publishedAt": "2026-03-12T15:27:14.307Z",
                    "likesCount": 2,
                    "isPublished": true,
                    "duration": 0
                },
                "relationships": {
                    "artists": {
                        "data": []
                    }
                }
            },
            {
                "id": "84c71dac-6e34-4764-a1c4-c077bfb73f1a",
                "type": "tracks",
                "attributes": {
                    "title": "intro.mp3",
                    "user": {
                        "id": "26",
                        "name": "Svyat-_b25"
                    },
                    "addedAt": "2025-12-29T09:02:12.382Z",
                    "attachments": [
                        {
                            "id": "c3dc2dc9-f35a-41b9-bd6d-673960e2d732",
                            "addedAt": "2025-12-29T09:02:05.780Z",
                            "updatedAt": "2025-12-29T09:02:05.780Z",
                            "version": 1,
                            "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Video/c56cbcb0-54d3-4a8e-afc1-b0df84c86bab_intro.mp3",
                            "contentType": "audio/mpeg",
                            "originalName": "intro.mp3",
                            "fileSize": 480069
                        }
                    ],
                    "images": {
                        "main": [
                            {
                                "type": "original",
                                "width": 300,
                                "height": 300,
                                "fileSize": 5229,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/19a57137-3963-498f-9ebe-a8db6bf67ee5_Screenshot_379.png"
                            },
                            {
                                "type": "medium",
                                "width": 156,
                                "height": 156,
                                "fileSize": 1843,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/10daa341-4711-493d-a669-705b2af626f2_image.png"
                            },
                            {
                                "type": "thumbnail",
                                "width": 48,
                                "height": 48,
                                "fileSize": 688,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/62bca8fb-78f3-4a25-bf3a-c36763fbd97b_image.png"
                            }
                        ]
                    },
                    "currentUserReaction": 0,
                    "publishedAt": "2026-03-12T10:46:26.512Z",
                    "likesCount": 2,
                    "isPublished": true,
                    "duration": 0
                },
                "relationships": {
                    "artists": {
                        "data": []
                    }
                }
            },
            {
                "id": "896e6fdc-7c64-46bc-8e49-4dee3e028b0f",
                "type": "tracks",
                "attributes": {
                    "title": "katana sound",
                    "user": {
                        "id": "19",
                        "name": "dimych"
                    },
                    "addedAt": "2025-10-10T16:21:26.931Z",
                    "attachments": [
                        {
                            "id": "4e0b6e56-d2ad-4fc2-b357-09a0a8610f49",
                            "addedAt": "2025-10-10T16:21:22.091Z",
                            "updatedAt": "2025-10-10T16:21:22.091Z",
                            "version": 1,
                            "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Video/90ba5091-5f58-4721-9c95-707e14716f39_1.mp3",
                            "contentType": "audio/mpeg",
                            "originalName": "1.mp3",
                            "fileSize": 70217
                        }
                    ],
                    "images": {
                        "main": []
                    },
                    "currentUserReaction": 0,
                    "publishedAt": "2026-02-26T18:02:02.241Z",
                    "likesCount": 0,
                    "isPublished": true,
                    "duration": 0
                },
                "relationships": {
                    "artists": {
                        "data": [
                            {
                                "id": "d62a2856-2a39-4e18-86ed-e72314d04188",
                                "type": "artists"
                            }
                        ]
                    }
                }
            },
            {
                "id": "07994a48-7133-4bbe-91cd-687424cdafd1",
                "type": "tracks",
                "attributes": {
                    "title": "new refactor track",
                    "user": {
                        "id": "19",
                        "name": "dimych"
                    },
                    "addedAt": "2026-01-29T17:20:35.080Z",
                    "attachments": [
                        {
                            "id": "a12166d5-a613-4307-9eff-cccee9cbb5ef",
                            "addedAt": "2026-01-29T17:20:34.108Z",
                            "updatedAt": "2026-01-29T17:20:34.108Z",
                            "version": 1,
                            "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Video/1c8171bc-5be2-4e3a-ae2c-56970ea9919e_file4.mp3",
                            "contentType": "audio/mpeg",
                            "originalName": "file4.mp3",
                            "fileSize": 16800
                        }
                    ],
                    "images": {
                        "main": [
                            {
                                "type": "thumbnail",
                                "width": 48,
                                "height": 48,
                                "fileSize": 1069,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/f42c26c5-b4ff-4828-acc9-c5522e4355b9_image.png"
                            },
                            {
                                "type": "medium",
                                "width": 156,
                                "height": 156,
                                "fileSize": 5081,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/74afd10e-0ece-455d-82b2-75036849d53a_image.png"
                            },
                            {
                                "type": "original",
                                "width": 520,
                                "height": 390,
                                "fileSize": 32622,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/a3ba06f2-d90e-400d-87f9-dab389d5be37_file1.jpeg"
                            }
                        ]
                    },
                    "currentUserReaction": 0,
                    "publishedAt": "2026-02-26T17:53:25.556Z",
                    "likesCount": 2,
                    "isPublished": true,
                    "duration": 0
                },
                "relationships": {
                    "artists": {
                        "data": []
                    }
                }
            },
            {
                "id": "d07e490b-ccb1-46cc-b34f-7c8bf080b63a",
                "type": "tracks",
                "attributes": {
                    "title": "CATCATCATCATCATCATCATCATCATCTCATCATCATCATCATCATCATCATCATCATCATCATCATCATCATCATCATCAT",
                    "user": {
                        "id": "224",
                        "name": "pashec_df2"
                    },
                    "addedAt": "2026-02-15T10:06:43.697Z",
                    "attachments": [
                        {
                            "id": "3d4624b4-4f5d-45f7-885c-b171ac0b09ae",
                            "addedAt": "2026-02-15T10:06:39.076Z",
                            "updatedAt": "2026-02-15T10:06:39.076Z",
                            "version": 1,
                            "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Video/b70799ee-d059-4f45-a984-4487aa2ba697_sample-9s.mp3",
                            "contentType": "audio/mpeg",
                            "originalName": "sample-9s.mp3",
                            "fileSize": 154062
                        }
                    ],
                    "images": {
                        "main": [
                            {
                                "type": "medium",
                                "width": 156,
                                "height": 156,
                                "fileSize": 3349,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/176461ad-6bb7-4c05-8d8b-f610bc234f93_image.png"
                            },
                            {
                                "type": "original",
                                "width": 600,
                                "height": 600,
                                "fileSize": 40392,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/84894c91-81b0-4415-a3c4-fbc5e2b8909a_z01.jpg"
                            },
                            {
                                "type": "thumbnail",
                                "width": 48,
                                "height": 48,
                                "fileSize": 891,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/a5521801-b59f-4903-9d48-261106128f15_image.png"
                            }
                        ]
                    },
                    "currentUserReaction": 0,
                    "publishedAt": "2026-02-15T10:06:58.557Z",
                    "likesCount": 3,
                    "isPublished": true,
                    "duration": 0
                },
                "relationships": {
                    "artists": {
                        "data": []
                    }
                }
            },
            {
                "id": "b34e729a-37a6-417d-ac45-116f93cf3bb3",
                "type": "tracks",
                "attributes": {
                    "title": "banana6boom - Frontend Жив_part_1",
                    "user": {
                        "id": "26",
                        "name": "Svyat-_b25"
                    },
                    "addedAt": "2026-01-19T11:53:11.980Z",
                    "attachments": [
                        {
                            "id": "944f98c7-13fe-41d5-9999-919f7c867efa",
                            "addedAt": "2026-01-19T11:52:52.536Z",
                            "updatedAt": "2026-01-19T11:52:52.536Z",
                            "version": 1,
                            "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Video/8474be85-3150-4bab-91dc-f0e34c9164cd_compress.mp3",
                            "contentType": "audio/mpeg",
                            "originalName": "compress.mp3",
                            "fileSize": 715437
                        }
                    ],
                    "images": {
                        "main": [
                            {
                                "type": "thumbnail",
                                "width": 48,
                                "height": 48,
                                "fileSize": 1024,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/9af7b14a-4235-4e59-b8f1-c53d2dd78328_image.png"
                            },
                            {
                                "type": "medium",
                                "width": 156,
                                "height": 156,
                                "fileSize": 5687,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/00e0a670-0935-40d2-a437-4d62110df5a5_image.png"
                            },
                            {
                                "type": "original",
                                "width": 259,
                                "height": 259,
                                "fileSize": 19033,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/f6c2c84d-8cc0-4cca-940c-235fc8da3a29_Screenshot_438.png"
                            },
                            {
                                "type": "original",
                                "width": 259,
                                "height": 259,
                                "fileSize": 19033,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/b1507fc5-c116-419a-8200-c3dd7ec16568_Screenshot_438.png"
                            }
                        ]
                    },
                    "currentUserReaction": 0,
                    "publishedAt": "2026-01-19T11:56:33.994Z",
                    "likesCount": 3,
                    "isPublished": true,
                    "duration": 0
                },
                "relationships": {
                    "artists": {
                        "data": [
                            {
                                "id": "1b516ddd-5916-404a-bb01-b56cfb9922ac",
                                "type": "artists"
                            }
                        ]
                    }
                }
            },
            {
                "id": "e9fe1062-d95c-4f0d-9fa9-a151fa1e8ccd",
                "type": "tracks",
                "attributes": {
                    "title": "test",
                    "user": {
                        "id": "228",
                        "name": "asdfghnatali_d34"
                    },
                    "addedAt": "2026-01-15T18:43:26.895Z",
                    "attachments": [
                        {
                            "id": "715df446-32bd-4145-863b-913580fed3af",
                            "addedAt": "2026-01-15T18:43:25.352Z",
                            "updatedAt": "2026-01-15T18:43:25.352Z",
                            "version": 1,
                            "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Video/778e494a-2122-4452-9e04-f0d67e8e0eda_1.mp3",
                            "contentType": "audio/mpeg",
                            "originalName": "1.mp3",
                            "fileSize": 70217
                        }
                    ],
                    "images": {
                        "main": []
                    },
                    "currentUserReaction": 0,
                    "publishedAt": "2026-01-15T18:43:44.486Z",
                    "likesCount": 1,
                    "isPublished": true,
                    "duration": 0
                },
                "relationships": {
                    "artists": {
                        "data": []
                    }
                }
            },
            {
                "id": "54472e63-5dca-4477-b6f2-46098b2f0240",
                "type": "tracks",
                "attributes": {
                    "title": "Choose Your Destiny",
                    "user": {
                        "id": "26",
                        "name": "Svyat-_b25"
                    },
                    "addedAt": "2025-12-29T09:02:25.382Z",
                    "attachments": [
                        {
                            "id": "0cf91925-6f6c-4fdb-b2ca-7c51eced7cff",
                            "addedAt": "2025-12-29T09:02:13.579Z",
                            "updatedAt": "2025-12-29T09:02:13.579Z",
                            "version": 1,
                            "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Video/f23325a2-a1b9-409b-99da-c72d5803d4fe_intro.mp3",
                            "contentType": "audio/mpeg",
                            "originalName": "intro.mp3",
                            "fileSize": 480069
                        }
                    ],
                    "images": {
                        "main": [
                            {
                                "type": "thumbnail",
                                "width": 48,
                                "height": 48,
                                "fileSize": 1244,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/564dbd03-74f3-4c5a-baaa-09377e94a715_image.png"
                            },
                            {
                                "type": "medium",
                                "width": 156,
                                "height": 156,
                                "fileSize": 7341,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/0d789bf4-8c79-4b14-9eee-f97a0feb928a_image.png"
                            },
                            {
                                "type": "original",
                                "width": 512,
                                "height": 512,
                                "fileSize": 74741,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/7c2dd940-9b26-4df8-bd49-ade4c3ed3411_unnamed.png"
                            },
                            {
                                "type": "original",
                                "width": 512,
                                "height": 512,
                                "fileSize": 74741,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/2e4e7170-2436-4e04-a03a-0032a9c8a99f_unnamed.png"
                            },
                            {
                                "type": "medium",
                                "width": 156,
                                "height": 156,
                                "fileSize": 7341,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/a5204ed4-02f3-4bc5-b316-aee3b69fcb4f_image.png"
                            },
                            {
                                "type": "thumbnail",
                                "width": 48,
                                "height": 48,
                                "fileSize": 1244,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/57d9dd98-9106-42fe-b5b7-55f3ba7cabf4_image.png"
                            }
                        ]
                    },
                    "currentUserReaction": 0,
                    "publishedAt": "2025-12-29T09:03:35.588Z",
                    "likesCount": 3,
                    "isPublished": true,
                    "duration": 0
                },
                "relationships": {
                    "artists": {
                        "data": []
                    }
                }
            },
            {
                "id": "07fca179-10ea-4dcd-b399-aaaec6cf7cd6",
                "type": "tracks",
                "attributes": {
                    "title": "Do Not Provoke Me",
                    "user": {
                        "id": "26",
                        "name": "Svyat-_b25"
                    },
                    "addedAt": "2025-12-29T08:55:47.706Z",
                    "attachments": [
                        {
                            "id": "3fcae767-d8fc-42ab-b4d7-59ddf7460b42",
                            "addedAt": "2025-12-29T08:55:45.979Z",
                            "updatedAt": "2025-12-29T08:55:45.979Z",
                            "version": 1,
                            "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Video/918a9058-f10f-4126-bb35-c6372b94b023_Voicy_Do Not Provoke Me.mp3",
                            "contentType": "audio/mpeg",
                            "originalName": "Voicy_Do Not Provoke Me.mp3",
                            "fileSize": 24691
                        }
                    ],
                    "images": {
                        "main": [
                            {
                                "type": "medium",
                                "width": 156,
                                "height": 156,
                                "fileSize": 7341,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/5ac77c11-355f-4f35-8549-1ffee6eab9f4_image.png"
                            },
                            {
                                "type": "original",
                                "width": 512,
                                "height": 512,
                                "fileSize": 74741,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/8e5c6fec-d696-44e9-98b6-8b2b8794a819_unnamed.png"
                            },
                            {
                                "type": "thumbnail",
                                "width": 48,
                                "height": 48,
                                "fileSize": 1244,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/f03c12d6-9cda-42d7-8c95-6c584120965b_image.png"
                            }
                        ]
                    },
                    "currentUserReaction": 0,
                    "publishedAt": "2025-12-29T08:57:30.789Z",
                    "likesCount": 3,
                    "isPublished": true,
                    "duration": 0
                },
                "relationships": {
                    "artists": {
                        "data": []
                    }
                }
            },
            {
                "id": "60d16045-9d93-4a3f-ac54-10b14444488e",
                "type": "tracks",
                "attributes": {
                    "title": "Mortal Kombat | Toasty",
                    "user": {
                        "id": "26",
                        "name": "Svyat-_b25"
                    },
                    "addedAt": "2025-12-22T13:40:54.181Z",
                    "attachments": [
                        {
                            "id": "882991e8-2594-4b8e-89cb-9ce805d788fe",
                            "addedAt": "2025-12-22T13:40:53.595Z",
                            "updatedAt": "2025-12-22T13:40:53.595Z",
                            "version": 1,
                            "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Video/292a29a5-ca6f-4c33-ab0e-094dd6d50266_Toasty.mp3",
                            "contentType": "audio/mpeg",
                            "originalName": "Toasty.mp3",
                            "fileSize": 17924
                        }
                    ],
                    "images": {
                        "main": [
                            {
                                "type": "original",
                                "width": 512,
                                "height": 512,
                                "fileSize": 74741,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/95cd96bd-5a51-496a-9e17-61023ed3fc0d_unnamed.png"
                            },
                            {
                                "type": "thumbnail",
                                "width": 48,
                                "height": 48,
                                "fileSize": 1244,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/e335682d-ead0-488c-913a-3e22a6a56cdf_image.png"
                            },
                            {
                                "type": "medium",
                                "width": 156,
                                "height": 156,
                                "fileSize": 7341,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/532e5457-6ce2-4fb2-8373-aa5847930adc_image.png"
                            }
                        ]
                    },
                    "currentUserReaction": 0,
                    "publishedAt": "2025-12-22T13:44:32.684Z",
                    "likesCount": 3,
                    "isPublished": true,
                    "duration": 0
                },
                "relationships": {
                    "artists": {
                        "data": []
                    }
                }
            },
            {
                "id": "836fcf19-a8be-4f40-acf5-c88363dc5fde",
                "type": "tracks",
                "attributes": {
                    "title": "Zltynestie",
                    "user": {
                        "id": "823",
                        "name": "fenixx"
                    },
                    "addedAt": "2025-12-21T07:48:33.987Z",
                    "attachments": [
                        {
                            "id": "00467e9e-1834-4158-ac08-45095b98890d",
                            "addedAt": "2025-12-21T07:48:17.510Z",
                            "updatedAt": "2025-12-21T07:48:17.510Z",
                            "version": 1,
                            "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Video/25bda39d-bc84-4a60-be94-7a57298587fd_31586.mp3",
                            "contentType": "audio/mpeg",
                            "originalName": "31586.mp3",
                            "fileSize": 662464
                        }
                    ],
                    "images": {
                        "main": []
                    },
                    "currentUserReaction": 0,
                    "publishedAt": "2025-12-21T09:41:00.723Z",
                    "likesCount": 2,
                    "isPublished": true,
                    "duration": 0
                },
                "relationships": {
                    "artists": {
                        "data": []
                    }
                }
            },
            {
                "id": "63d03073-cc0d-4791-a6fb-0aedf1462c63",
                "type": "tracks",
                "attributes": {
                    "title": "Xorkokilal",
                    "user": {
                        "id": "823",
                        "name": "fenixx"
                    },
                    "addedAt": "2025-12-21T07:48:34.132Z",
                    "attachments": [
                        {
                            "id": "35b967a3-7103-4770-8d88-f4b6c227fb2e",
                            "addedAt": "2025-12-21T07:48:26.908Z",
                            "updatedAt": "2025-12-21T07:48:26.908Z",
                            "version": 1,
                            "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Video/f123c83d-810e-4e63-9580-52bb87efd64e_31586.mp3",
                            "contentType": "audio/mpeg",
                            "originalName": "31586.mp3",
                            "fileSize": 662464
                        }
                    ],
                    "images": {
                        "main": []
                    },
                    "currentUserReaction": 0,
                    "publishedAt": "2025-12-21T09:40:53.415Z",
                    "likesCount": 2,
                    "isPublished": true,
                    "duration": 0
                },
                "relationships": {
                    "artists": {
                        "data": []
                    }
                }
            },
            {
                "id": "72f23e44-8775-4a29-bb81-2679f58ebf5d",
                "type": "tracks",
                "attributes": {
                    "title": "Qumonaitod",
                    "user": {
                        "id": "823",
                        "name": "fenixx"
                    },
                    "addedAt": "2025-12-21T07:47:41.082Z",
                    "attachments": [
                        {
                            "id": "e2dd1bab-74d4-4e32-84d3-8c3ecda52d7f",
                            "addedAt": "2025-12-21T07:47:30.034Z",
                            "updatedAt": "2025-12-21T07:47:30.034Z",
                            "version": 1,
                            "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Video/57a7f757-8297-4201-8463-b5cf381d0cf7_31586.mp3",
                            "contentType": "audio/mpeg",
                            "originalName": "31586.mp3",
                            "fileSize": 662464
                        }
                    ],
                    "images": {
                        "main": []
                    },
                    "currentUserReaction": 0,
                    "publishedAt": "2025-12-21T07:47:47.887Z",
                    "likesCount": 0,
                    "isPublished": true,
                    "duration": 0
                },
                "relationships": {
                    "artists": {
                        "data": []
                    }
                }
            },
            {
                "id": "f23c1f4f-57bb-4fa6-b36a-1a1400e754fa",
                "type": "tracks",
                "attributes": {
                    "title": "Arrtodrite",
                    "user": {
                        "id": "823",
                        "name": "fenixx"
                    },
                    "addedAt": "2025-12-20T22:08:37.860Z",
                    "attachments": [
                        {
                            "id": "f3351f27-28c0-4402-bffb-a5758297e043",
                            "addedAt": "2025-12-20T22:08:28.182Z",
                            "updatedAt": "2025-12-20T22:08:28.182Z",
                            "version": 1,
                            "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Video/eeb085af-a259-43c1-8e6e-6db1c7bbb52f_31586.mp3",
                            "contentType": "audio/mpeg",
                            "originalName": "31586.mp3",
                            "fileSize": 662464
                        }
                    ],
                    "images": {
                        "main": []
                    },
                    "currentUserReaction": 0,
                    "publishedAt": "2025-12-20T22:08:42.763Z",
                    "likesCount": 1,
                    "isPublished": true,
                    "duration": 0
                },
                "relationships": {
                    "artists": {
                        "data": []
                    }
                }
            },
            {
                "id": "40941736-77b7-4bb0-b3b2-ca1e31e1f4a6",
                "type": "tracks",
                "attributes": {
                    "title": "sddswe",
                    "user": {
                        "id": "19",
                        "name": "dimych"
                    },
                    "addedAt": "2025-10-28T16:18:51.946Z",
                    "attachments": [
                        {
                            "id": "07fc331e-edd2-4615-9c0b-4b76d2ce956f",
                            "addedAt": "2025-10-28T16:18:49.738Z",
                            "updatedAt": "2025-10-28T16:18:49.738Z",
                            "version": 1,
                            "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Video/b36eca74-d59a-4bb2-89bb-9340c920188f_1.mp3",
                            "contentType": "audio/mpeg",
                            "originalName": "1.mp3",
                            "fileSize": 70217
                        }
                    ],
                    "images": {
                        "main": [
                            {
                                "type": "medium",
                                "width": 156,
                                "height": 156,
                                "fileSize": 5646,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/cf8be8f1-c446-415d-af72-4112d3cb1569_image.png"
                            },
                            {
                                "type": "original",
                                "width": 213,
                                "height": 213,
                                "fileSize": 12052,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/35c76ebd-511e-4e4f-b1e2-006ef8dfc05d_Ð°Ð¸ÌÑÐ¸Ð»Ð¸ÐºÐ±ÐµÐ· Ð¸Ð· ÑÐ°ÑÐ¸Ð»Ñ.jpg"
                            },
                            {
                                "type": "thumbnail",
                                "width": 48,
                                "height": 48,
                                "fileSize": 1159,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/463a6b88-44cc-48cb-8bb1-229d3153a692_image.png"
                            }
                        ]
                    },
                    "currentUserReaction": 0,
                    "publishedAt": "2025-10-28T19:48:05.967Z",
                    "likesCount": 1,
                    "isPublished": true,
                    "duration": 0
                },
                "relationships": {
                    "artists": {
                        "data": []
                    }
                }
            },
            {
                "id": "196e9939-2311-4dbf-bb51-d3c0676e8bfd",
                "type": "tracks",
                "attributes": {
                    "title": "myTrackTest",
                    "user": {
                        "id": "269",
                        "name": "EGalanin_364"
                    },
                    "addedAt": "2025-10-12T09:26:54.793Z",
                    "attachments": [
                        {
                            "id": "4ca76c7e-90e2-495c-96f5-45f71f5f2507",
                            "addedAt": "2025-10-12T09:26:43.474Z",
                            "updatedAt": "2025-10-12T09:26:43.474Z",
                            "version": 1,
                            "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Video/b316d7cd-5f46-48e7-96a7-7e857ec47f36_So Strung Out.mp3",
                            "contentType": "audio/mpeg",
                            "originalName": "So Strung Out.mp3",
                            "fileSize": 967181
                        }
                    ],
                    "images": {
                        "main": [
                            {
                                "type": "thumbnail",
                                "width": 48,
                                "height": 48,
                                "fileSize": 1019,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/dfcd6529-b4af-47dd-a2bd-5156c7750820_image.png"
                            },
                            {
                                "type": "medium",
                                "width": 156,
                                "height": 156,
                                "fileSize": 5551,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/d01f132a-91a7-4a3a-a7dd-c34baa39210f_image.png"
                            },
                            {
                                "type": "original",
                                "width": 736,
                                "height": 736,
                                "fileSize": 77964,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/76c5e388-9616-4bcb-a95a-eac7f9f394ea_cover.jpg"
                            }
                        ]
                    },
                    "currentUserReaction": 0,
                    "publishedAt": "2025-10-12T09:27:09.934Z",
                    "likesCount": 3,
                    "isPublished": true,
                    "duration": 0
                },
                "relationships": {
                    "artists": {
                        "data": []
                    }
                }
            },
            {
                "id": "88133ec1-f82d-4fbb-b53b-5138b6fc7b90",
                "type": "tracks",
                "attributes": {
                    "title": "gangsta react",
                    "user": {
                        "id": "19",
                        "name": "dimych"
                    },
                    "addedAt": "2025-08-13T19:15:17.182Z",
                    "attachments": [
                        {
                            "id": "b217ec35-9021-4318-b0ca-7b31df1958a6",
                            "addedAt": "2025-08-13T19:15:15.487Z",
                            "updatedAt": "2025-08-13T19:15:15.487Z",
                            "version": 1,
                            "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Video/0ae77ecd-f271-4e4c-881c-74e4bdfb4046_file4.mp3",
                            "contentType": "audio/mpeg",
                            "originalName": "file4.mp3",
                            "fileSize": 16800
                        }
                    ],
                    "images": {
                        "main": [
                            {
                                "type": "original",
                                "width": 200,
                                "height": 200,
                                "fileSize": 14040,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/e46c0be9-f36e-4131-abbc-0e6512985550_cover.png"
                            },
                            {
                                "type": "thumbnail",
                                "width": 48,
                                "height": 48,
                                "fileSize": 945,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/b3bd1da4-7b4c-4fa9-a959-0915c3c4abf4_image.png"
                            },
                            {
                                "type": "medium",
                                "width": 156,
                                "height": 156,
                                "fileSize": 5615,
                                "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Image/f9340e41-b46e-4db2-a504-b37383e9c0bd_image.png"
                            }
                        ]
                    },
                    "currentUserReaction": 0,
                    "publishedAt": "2025-08-13T19:16:27.070Z",
                    "likesCount": 5,
                    "isPublished": true,
                    "duration": 0
                },
                "relationships": {
                    "artists": {
                        "data": []
                    }
                }
            },
            {
                "id": "79fce981-0956-4415-875c-9f90c6ad8a97",
                "type": "tracks",
                "attributes": {
                    "title": "11111",
                    "user": {
                        "id": "38",
                        "name": "artvrybin_45c"
                    },
                    "addedAt": "2025-08-07T11:48:07.065Z",
                    "attachments": [
                        {
                            "id": "2b122161-98a8-43b2-b29c-9f58a45d19c9",
                            "addedAt": "2025-08-07T11:47:54.464Z",
                            "updatedAt": "2025-08-07T11:47:54.464Z",
                            "version": 1,
                            "url": "https://production-it-incubator.s3.eu-central-1.amazonaws.com/apihub-spotifun/Video/815b57b4-92f3-4134-9deb-749d27791ab1_file_example_MP3_700KB.mp3",
                            "contentType": "audio/mpeg",
                            "originalName": "file_example_MP3_700KB.mp3",
                            "fileSize": 733645
                        }
                    ],
                    "images": {
                        "main": []
                    },
                    "currentUserReaction": 0,
                    "publishedAt": "2025-08-07T11:48:07.484Z",
                    "likesCount": 2,
                    "isPublished": true,
                    "duration": 0
                },
                "relationships": {
                    "artists": {
                        "data": []
                    }
                }
            }
        ],
        "included": [
            {
                "id": "d62a2856-2a39-4e18-86ed-e72314d04188",
                "type": "artists",
                "attributes": {
                    "name": "nirvana"
                }
            },
            {
                "id": "1b516ddd-5916-404a-bb01-b56cfb9922ac",
                "type": "artists",
                "attributes": {
                    "name": "eminem"
                }
            }
        ],
        "meta": {
            "page": 1,
            "pageSize": 20,
            "totalCount": 46,
            "pagesCount": 3,
            "nextCursor": null
        }
    })
}