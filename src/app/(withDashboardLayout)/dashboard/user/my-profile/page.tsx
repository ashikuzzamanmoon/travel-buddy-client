"use client";
import { useGetUserQuery } from "@/redux/api/userApi";
import { Avatar, Button } from "@mui/material";
import Link from "next/link";

const MyProfile = () => {
  const { data, isLoading } = useGetUserQuery({});
  return (
    <section className="pt-16 bg-blueGray-50">
      <div className="w-full lg:w-4/6 px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 flex justify-center">
                <div className="relative">
                  <Avatar
                    alt="profile img"
                    src="https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?t=st=1716643928~exp=1716647528~hmac=86efbc87f4d7888a035a81c3627036992868986f60613d8153acb1e444e85d3f&w=740"
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
                    <span className="text-sm text-blueGray-400">Friends</span>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      10
                    </span>
                    <span className="text-sm text-blueGray-400">Photos</span>
                  </div>
                  <div className="lg:mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      89
                    </span>
                    <span className="text-sm text-blueGray-400">Comments</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-4 gap-5">
              <Link href="/dashboard/user/my-profile/edit">
                <Button variant="outlined" color="primary" className="mr-4">
                  Edit Profile
                </Button>
              </Link>
              <Link href="/dashboard/user/my-profile/change-password">
                <Button variant="outlined" color="primary">
                  Change Password
                </Button>
              </Link>
            </div>
            <div className="text-center mt-12">
              <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
                {isLoading ? "Loading..." : data?.name}
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                {isLoading ? "Loading..." : data?.email}
              </div>
              <div className="mb-2 text-blueGray-600 mt-10">
                <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                Solution Manager - Creative Tim Officer
              </div>
              <div className="mb-2 text-blueGray-600">
                <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                University of Computer Science
              </div>
            </div>
            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    An artist of considerable range, Jenna the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy writes,
                    performs and records all of his own music, giving it a warm,
                    intimate feel with a solid groove structure. An artist of
                    considerable range.
                  </p>
                  <a
                    href="javascript:void(0);"
                    className="font-normal text-pink-500"
                  >
                    Show more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;