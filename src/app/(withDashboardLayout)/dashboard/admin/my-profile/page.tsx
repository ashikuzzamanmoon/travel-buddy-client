"use client";
import { useGetUserQuery } from "@/redux/api/userApi";
import { Avatar, Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const AdminProfile = () => {
  const { data: user, isLoading } = useGetUserQuery({});

  return (
    <div>
      <div className="">
        {isLoading ? (
          <Typography>Loading</Typography>
        ) : (
          <section className="pt-16 bg-blueGray-50">
            <div className="w-full lg:w-4/6 px-4 mx-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4 flex justify-center">
                      <div className="relative">
                        <Avatar
                          alt="profile img"
                          src={
                            user?.userProfile?.userPhoto
                              ? user?.userProfile?.userPhoto
                              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnDNmpgYnTP4ELmIob69uKE1O0Rbrotna00g&s"
                          }
                          sx={{
                            width: 150,
                            height: 150,
                            position: "absolute",
                            mt: -10,
                            ml: -10,
                          }}
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 text-center mt-20">
                      <div className="flex justify-center py-4 lg:pt-4 pt-8">
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            22
                          </span>
                          <span className="text-sm text-blueGray-400">
                            Friends
                          </span>
                        </div>
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            10
                          </span>
                          <span className="text-sm text-blueGray-400">
                            Photos
                          </span>
                        </div>
                        <div className="lg:mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            89
                          </span>
                          <span className="text-sm text-blueGray-400">
                            Comments
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center mt-4 gap-5">
                    <Link href={`/dashboard/admin/my-profile/edit/${user?.id}`}>
                      <Button
                        variant="outlined"
                        color="primary"
                        className="mr-4"
                      >
                        Edit Profile
                      </Button>
                    </Link>
                    <Link href={`/dashboard/change-password`}>
                      <Button variant="outlined" color="primary">
                        Change Password
                      </Button>
                    </Link>
                  </div>
                  <div className="text-center mt-12">
                    <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
                      {isLoading ? "Loading..." : user?.name}
                    </h3>
                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                      <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                      {isLoading ? "Loading..." : user?.email}
                    </div>
                    <div className="mb-2 text-blueGray-600 mt-10">
                      <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                      Age: {user?.userProfile?.age}
                    </div>
                    <div className="mb-2 text-blueGray-600">
                      <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                      Bio: {user?.userProfile?.bio}
                    </div>
                  </div>
                  <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-9/12 px-4">
                        <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                          An artist of considerable range, Jenna the name taken
                          by Melbourne-raised, Brooklyn-based Nick Murphy
                          writes, performs and records all of his own music,
                          giving it a warm, intimate feel with a solid groove
                          structure. An artist of considerable range.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default AdminProfile;
